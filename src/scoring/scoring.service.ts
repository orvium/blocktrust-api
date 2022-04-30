import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ScoringDocument } from './scoring.schema';
import { FilterQuery, Model } from 'mongoose';
import { ScoringCreateDTO } from '../dtos/scoring/scoring-create.dto';

@Injectable()
export class ScoringService {
  constructor(
    @InjectModel(ScoringDocument.name) public scoringModel: Model<ScoringDocument>
  ) {
  }

  async findById(id: string): Promise<ScoringDocument | null> {
    return this.scoringModel.findById(id).populate('paper').populate('reputationModel').exec();
  }

  async find(filter: FilterQuery<ScoringDocument>): Promise<ScoringDocument[]> {
    return this.scoringModel.find(filter).populate('paper').populate('reputationModel').exec();
  }

  async create(payload: ScoringCreateDTO): Promise<ScoringDocument> {
    return this.scoringModel.create(payload);
  }
}
