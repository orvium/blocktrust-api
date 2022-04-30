import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ReputationModelCreateDTO } from '../dtos/reputation-model/reputation-model-create.dto';
import { ReputationModelUpdateDTO } from '../dtos/reputation-model/reputation-model-update.dto';
import { ReputationModelDTO } from '../dtos/reputation-model/reputation-model.dto';
import { ReputationModelDocument } from './reputation-model.schema';
import { ReputationModelService } from './reputation-model.service';
import { ScoringDTO } from '../dtos/scoring/scoring.dto';
import { ScoringDocument } from '../scoring/scoring.schema';
import { ScoringService } from '../scoring/scoring.service';

@ApiTags('reputation-model')
@Controller('reputation-model')
export class ReputationModelController {
  constructor(private rmService: ReputationModelService,
              private scoringService: ScoringService) {
  }

  /**
   * Get rm by id
   */
  @Get(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ReputationModelDTO,
  })
  async getById(@Param('id') id: string): Promise<ReputationModelDocument> {
    const rm = await this.rmService.findById(id);
    if (!rm) throw new NotFoundException(`Reputation Model not found`);
    return await this.rmService.findById(id);
  }

  /**
   * Get all scorings of a reputation model
   */
  @Get(':id([0-9a-f]{24})/scorings')
  @ApiOkResponse({
    type: ScoringDTO,
  })
  async getModelScorings(@Param('id') id: string): Promise<ScoringDocument[]> {
    return await this.scoringService.find({ reputationModel: id });
  }

  /**
   * Get all rms
   */
  @Get()
  @ApiOkResponse({
    type: ReputationModelDTO,
  })
  async getAll(): Promise<ReputationModelDocument[]> {
    return await this.rmService.find({});
  }

  /**
   * Create new rm
   */
  @Post()
  @ApiCreatedResponse({
    type: ReputationModelDTO,
  })
  async create(@Body() payload: ReputationModelCreateDTO) {
    return await this.rmService.create(payload);
  }

  /**
   * Update rm
   */
  @Patch(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ReputationModelDTO,
  })
  async update(@Param('id') id: string, @Body() payload: ReputationModelUpdateDTO) {
    const rm = await this.rmService.findById(id);
    if (!rm) throw new NotFoundException(`Reputation Model not found`);
    Object.assign(rm, payload);
    return await rm.save();
  }

  /**
   * Delete rm
   */
  @Delete(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: ReputationModelDTO,
  })
  async delete(@Param('id') id: string) {
    const rm = await this.rmService.findById(id);
    if (!rm) throw new NotFoundException(`Reputation Model not found`);
    return await rm.remove();
  }
}
