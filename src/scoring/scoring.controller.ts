import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ScoringService } from './scoring.service';
import { ScoringDTO } from '../dtos/scoring/scoring.dto';
import { ScoringDocument } from './scoring.schema';
import { ScoringCreateDTO } from '../dtos/scoring/scoring-create.dto';
import { ScoringUpdateDTO } from '../dtos/scoring/scoring-update.dto';

@ApiTags('scoring')
@Controller('scoring')
export class ScoringController {
  constructor(private scoringService: ScoringService) {
  }

  /**
   * Get scoring by id
   */
  @Get(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ScoringDTO
  })
  async getById(@Param('id') id: string): Promise<ScoringDocument> {
    const scoring = await this.scoringService.findById(id);
    if (!scoring) throw new NotFoundException(`Scoring not found`);
    return await this.scoringService.findById(id);
  }

  /**
   * Get all scorings
   */
  @Get()
  @ApiOkResponse({
    type: ScoringDTO,
  })
  async getAll(): Promise<ScoringDocument[]> {
    return await this.scoringService.find({});
  }

  /**
   * Create new scoring
   */
  @Post()
  @ApiCreatedResponse({
    type: ScoringDTO,
  })
  async create(@Body() payload: ScoringCreateDTO) {
    return await this.scoringService.create(payload);
  }

  /**
   * Update scoring
   */
  @Patch(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ScoringDTO,
  })
  async update(@Param('id') id: string, @Body() payload: ScoringUpdateDTO) {
    const scoring = await this.scoringService.findById(id);
    if (!scoring) throw new NotFoundException(`Scoring not found`);
    Object.assign(scoring, payload);
    return await scoring.save();
  }

  /**
   * Delete scoring
   */
  @Delete(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ScoringDTO,
  })
  async delete(@Param('id') id: string) {
    const scoring = await this.scoringService.findById(id);
    if (!scoring) throw new NotFoundException(`Scoring not found`);
    return await scoring.remove();
  }
}
