import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ReviewDocument } from './review.schema';
import { FilterQuery, Model } from 'mongoose';
import { ReviewCreateDTO } from '../dtos/review/review-create.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewDocument.name) public reviewModel: Model<ReviewDocument>
  ) {
  }

  async findById(id: string): Promise<ReviewDocument | null> {
    return this.reviewModel.findById(id).populate('creator').populate('paper').exec();
  }

  async find(filter: FilterQuery<ReviewDocument>): Promise<ReviewDocument[]> {
    return this.reviewModel.find(filter).populate('creator').populate('paper').exec();
  }

  async create(payload: ReviewCreateDTO): Promise<ReviewDocument> {
    return this.reviewModel.create(payload);
  }
}
