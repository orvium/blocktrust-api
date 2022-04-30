import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  Res,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { diskStorage } from 'multer';
import { FileMetadata } from '../dtos/general/file-metadata';
import { PaperCreateDTO } from '../dtos/paper/paper-create.dto';
import { PaperUpdateDTO } from '../dtos/paper/paper-update.dto';
import { PaperDTO } from '../dtos/paper/paper.dto';
import { editFileName } from '../utils';
import { PaperDocument } from './paper.schema';
import { PaperService } from './paper.service';
import { FilterQuery } from 'mongoose';

@ApiTags('paper')
@Controller('paper')
export class PaperController {
  constructor(private paperService: PaperService) {
  }

  /**
   * Get paper by id
   */
  @Get(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: PaperDTO,
  })
  async getById(@Param('id') id: string): Promise<PaperDocument> {
    const paper = await this.paperService.findById(id);
    if (!paper) throw new NotFoundException(`Paper not found`);
    return await this.paperService.findById(id);
  }

  /**
   * Get all papers
   */
  @Get()
  @ApiOkResponse({
    type: PaperDTO,
  })
  async getAll(): Promise<PaperDocument[]> {
    return await this.paperService.find({});
  }

  /**
   * Get papers with filter
   */
  @Get('search')
  @ApiOkResponse({
    type: PaperDTO,
  })
  async getByFilter(
    @Query('query') query?: string
  ): Promise<PaperDocument[]> {
    const filter: FilterQuery<PaperDocument> = {};
    if (query) {
      filter.$text = { $search: query };
    }

    return await this.paperService.find(filter);
  }

  /**
   * Get all users papers
   */
  @Get('my/:id([0-9a-f]{24})')
  @ApiOkResponse({
    type: PaperDTO,
  })
  async getMy(@Param('id') id: string): Promise<PaperDocument[]> {
    return await this.paperService.find({ creator: id });
  }

  /**
   * Create new paper
   */
  @Post()
  @ApiCreatedResponse({
    type: PaperDTO,
  })
  async create(@Body() payload: PaperCreateDTO) {
    return await this.paperService.create(payload);
  }

  /**
   * Update paper
   */
  @Patch(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: PaperDTO,
  })
  async update(@Param('id') id: string, @Body() payload: PaperUpdateDTO) {
    const paper = await this.paperService.findById(id);
    if (!paper) throw new NotFoundException(`Paper not found`);
    Object.assign(paper, payload);
    return await paper.save();
  }

  /**
   * Delete paper
   */
  @Delete(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: PaperDTO,
  })
  async delete(@Param('id') id: string) {
    const paper = await this.paperService.findById(id);
    if (!paper) throw new NotFoundException(`Paper not found`);
    return await paper.remove();
  }

  /**
   * Upload paper
   */
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files/papers',
        filename: editFileName,
      }),
    }),
  )
  async uploadedFile(@UploadedFile() file: Express.Multer.File) {
    const response: FileMetadata = {
      filename: file.originalname,
      contentType: file.mimetype,
      contentLength: file.size,
      url: file.filename,
      tags: []
    };
    return response;
  }

  /**
   * Download paper
   */
  @Get(':filePath')
  seeUploadedFile(
    @Param('filePath') filePath: string,
    @Res() res: Response
  ) {
    return res.sendFile(filePath, { root: './files/papers' });
  }
}
