import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { UserDocument } from '../user/user.schema';
import { PaperDocument } from '../paper/paper.schema';
import { REVIEW_DECISION } from '../enums/review-decision.enum';
import { REVIEW_STATUS } from '../enums/review-status.enum';
import { FileMetadata } from '../dtos/general/file-metadata';
import { REVIEW_KIND } from '../enums/review-kind.enum';


@Schema({ collection: 'review', timestamps: true })
export class ReviewDocument extends Document {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserDocument',
  })
  creator!: mongoose.Schema.Types.ObjectId | string | UserDocument;
  @Prop({ required: true }) title!: string;
  @Prop({ trim: true }) comment?: string;
  @Prop() publicationDate?: Date;
  @Prop({ required: true, default: false }) wasInvited!: boolean;
  @Prop({ type: mongoose.SchemaTypes.Mixed }) transactions?: unknown;
  @Prop({ trim: true }) doi?: string;
  @Prop([{ required: true, type: mongoose.Schema.Types.ObjectId, default: [] }])
  socialComments!: mongoose.Schema.Types.ObjectId[] | string[];
  @Prop({ default: true }) canBeReviewed!: boolean;
  @Prop() reward?: number;
  @Prop({ required: true, default: false })
  revealReviewerIdentity!: boolean;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PaperDocument'
  })
  paper!: mongoose.Schema.Types.ObjectId | string | PaperDocument;
  @Prop({
    required: true,
    enum: Object.values(REVIEW_DECISION),
    default: REVIEW_DECISION.accepted
  }) decision?: REVIEW_DECISION;
  @Prop({
    required: true,
    enum: Object.values(REVIEW_STATUS),
    default: REVIEW_STATUS.draft
  })
  status!: REVIEW_STATUS;
  @Prop({ type: mongoose.SchemaTypes.Mixed }) file?: FileMetadata;
  @Prop({
    required: true,
    enum: Object.values(REVIEW_KIND),
    default: REVIEW_KIND.peerReview
  })
  kind!: REVIEW_KIND;
}

export const ReviewSchema = SchemaFactory.createForClass(ReviewDocument);
