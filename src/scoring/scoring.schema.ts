import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { PaperDocument } from '../paper/paper.schema';
import { ReputationModelDocument } from '../reputation-model/reputation-model.schema';

@Schema({ collection: 'scoring', timestamps: true })
export class ScoringDocument extends Document {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaperDocument'
  })
  paper!: mongoose.Schema.Types.ObjectId | string | PaperDocument;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ReputationModelDocument'
  })
  reputationModel!: mongoose.Schema.Types.ObjectId | string | ReputationModelDocument;
  @Prop({
    required: true,
    type: Date
  })
  timestamp;
  @Prop({
    required: true,
    type: Number
  })
  score;
}

export const ScoringSchema = SchemaFactory.createForClass(ScoringDocument);
