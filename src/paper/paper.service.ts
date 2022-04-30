import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaperDocument } from './paper.schema';
import { FilterQuery, Model } from 'mongoose';
import { PaperCreateDTO } from '../dtos/paper/paper-create.dto';

@Injectable()
export class PaperService {
  constructor(
    @InjectModel(PaperDocument.name) public paperModel: Model<PaperDocument>
  ) {
  }

  async findById(id: string): Promise<PaperDocument | null> {
    return this.paperModel.findById(id).populate('creator').exec();
  }

  async find(filter: FilterQuery<PaperDocument>): Promise<PaperDocument[]> {
    return this.paperModel.find(filter).populate('creator').exec();
  }

  async create(payload: PaperCreateDTO): Promise<PaperDocument> {
    return this.paperModel.create(payload);
  }
}
