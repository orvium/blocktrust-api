import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Author } from '../dtos/general/author';
import { FileMetadata } from '../dtos/general/file-metadata';
import { HistoryLogLine } from '../dtos/general/history-log-line';
import { Scoring } from '../dtos/general/scoring';
import { PAPER_STATUS } from '../enums/paper-status.enum';
import { PAPER_TYPE } from '../enums/paper-type.enum';
import { REVIEW_TYPE } from '../enums/review-type.enum';
import { UserDocument } from '../user/user.schema';

@Schema({ collection: 'paper', timestamps: true })
export class PaperDocument extends Document {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDocument',
  })
  creator!: mongoose.Schema.Types.ObjectId | string | UserDocument;
  @Prop({ required: true, trim: true })
  title!: string;
  @Prop({ trim: true }) abstract?: string;
  @Prop() submissionDate?: Date;
  @Prop() publicationDate?: Date;
  @Prop({ required: true, default: [], trim: true })
  keywords!: string[];
  @Prop({ type: mongoose.SchemaTypes.Mixed })
  transactions?: unknown;
  @Prop({ trim: true })
  doi?: string;
  @Prop({ required: true, default: [] })
  disciplines!: string[];
  @Prop({ required: true, type: [mongoose.Schema.Types.Mixed], default: [], trim: true })
  references!: string[];
  @Prop({ required: true, default: 1 })
  version!: number;
  @Prop() images?: string[];
  @Prop([{ required: true, type: mongoose.Schema.Types.ObjectId, default: [] }])
  socialComments!: mongoose.Schema.Types.ObjectId[] | string[];
  @Prop({ required: true, default: true }) canBeReviewed!: boolean;
  @Prop() gitRepository?: string;
  @Prop() openAireIdentifier?: string;
  @Prop({ required: true, default: 0 })
  views!: number;
  @Prop({ required: true, default: true })
  isLatestVersion!: boolean;
  @Prop({
    required: true,
    enum: Object.values(PAPER_TYPE),
    default: PAPER_TYPE.article
  })
  paperType!: PAPER_TYPE;
  @Prop({
    required: true,
    enum: Object.values(PAPER_STATUS),
    default: PAPER_STATUS.draft
  })
  status!: PAPER_STATUS;
  @Prop({
    required: true,
    enum: Object.values(REVIEW_TYPE),
    default: REVIEW_TYPE.openReview
  })
  reviewType!: REVIEW_TYPE;
  @Prop({ type: mongoose.SchemaTypes.Mixed, required: true, default: [] })
  history!: HistoryLogLine[];
  @Prop([{ required: true, type: mongoose.Schema.Types.Mixed, default: [] }])
  authors!: Author[];
  @Prop({ type: mongoose.SchemaTypes.Mixed })
  publicationFile?: FileMetadata;
  @Prop({ type: mongoose.SchemaTypes.Mixed, required: true, default: [] })
  scoring!: Scoring[];
}

export const PaperSchema = SchemaFactory.createForClass(PaperDocument);

PaperSchema.index({
  title: 'text',
  abstract: 'text'
});
