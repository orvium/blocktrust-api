import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReputationModelDocument } from './reputation-model.schema';
import { FilterQuery, Model } from 'mongoose';
import { ReputationModelCreateDTO } from '../dtos/reputation-model/reputation-model-create.dto';

@Injectable()
export class ReputationModelService {
  constructor(
    @InjectModel(ReputationModelDocument.name) public reputationModel: Model<ReputationModelDocument>
  ) {
  }

  async findById(id: string): Promise<ReputationModelDocument | null> {
    return this.reputationModel.findById(id).exec();
  }

  async find(filter: FilterQuery<ReputationModelDocument>): Promise<ReputationModelDocument[]> {
    return this.reputationModel.find(filter).exec();
  }

  async create(payload: ReputationModelCreateDTO): Promise<ReputationModelDocument> {
    return this.reputationModel.create(payload);
  }
}
