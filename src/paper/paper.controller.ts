import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PaperCreateDTO } from '../dtos/paper/paper-create.dto';
import { PaperUpdateDTO } from '../dtos/paper/paper-update.dto';
import { PaperDTO } from '../dtos/paper/paper.dto';
import { PaperDocument } from './paper.schema';
import { PaperService } from './paper.service';

@ApiTags('paper')
@Controller('paper')
export class PaperController {
  constructor(private paperService: PaperService) {}

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
}
