import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { UserDocument } from '../user/user.schema';

export enum PAPER_TYPE {
  book = 'book',
  bookSection = 'book section',
  conferencePaper = 'conference paper',
  article = 'article',
  patent = 'patent',
  preprint = 'preprint',
  report = 'report',
  dataset = 'dataset',
  softwareDocumentation = 'software documentation',
  thesis = 'thesis',
  technicalNote = 'technical note',
  workingPaper = 'working paper',
  policyReport = 'policy report',
  registeredReport = 'registered report',
  proposal = 'proposal',
  reviewArticle = 'review article',
  video = 'video',
  other = 'other'
}

export enum PAPER_STATUS {
  draft = 'draft',
  pendingApproval = 'pending approval',
  published = 'published',
  preprint = 'preprint',
  rejected = 'rejected',
  merged = 'merged'
}

export enum REVIEW_TYPE {
  openReview = 'open review'
}

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
  @Prop({ required: true, default: Date.now })
  createdOn!: Date;
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



  // @Prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'UserDocument',
  // })
  // assignee?: mongoose.Schema.Types.ObjectId | string | UserDocument;

  // @Prop({ required: true })
  // nickname!: string;
  // @Prop({
  //   required: true,
  //   enum: Object.values(PUBLICATION_TYPE),
  //   default: PUBLICATION_TYPE.article
  // })
  // publicationType!: PUBLICATION_TYPE;
  // @Prop({
  //   required: true,
  //   enum: Object.values(ACCESS_RIGHT),
  //   default: ACCESS_RIGHT.CC0
  // })
  // accessRight!: ACCESS_RIGHT;
  // @Prop({
  //   required: true,
  //   enum: Object.values(DEPOSIT_STATUS),
  //   default: DEPOSIT_STATUS.draft
  // })
  // status!: DEPOSIT_STATUS;
  // @Prop([{
  //   required: true,
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'ReviewDocument',
  //   default: []
  // }])
  // peerReviews!: mongoose.Schema.Types.ObjectId[] | ReviewDocument[];
  // @Prop({
  //   required: true,
  //   enum: Object.values(REVIEW_TYPE),
  //   default: REVIEW_TYPE.openReview
  // })
  // reviewType!: REVIEW_TYPE;
  // @Prop([{ required: true, type: mongoose.Schema.Types.Mixed, default: [] }])
  // authors!: Author[];
  // @Prop({ required: true, type: Array, default: [] })
  // files!: FileMetadata[];
  // @Prop() gravatar?: string;
  // @Prop() keccak256?: string;
  // @Prop() pdfUrl?: string;
  // @Prop() html?: string;
  // @Prop({ type: mongoose.SchemaTypes.Mixed })
  // publicationFile?: FileMetadata;
  // @Prop({
  //   required: true,
  //   ref: CommunityDocument.name,
  //   type: mongoose.Schema.Types.ObjectId
  // })
  // community!: mongoose.Schema.Types.ObjectId | string | CommunityDocument;
  // @Prop({
  //   required: true,
  //   default: uuidv4(),
  // })
  // parent!: string;


  // @Prop() track?: string;

  // @Prop({ type: mongoose.SchemaTypes.Mixed, required: true, default: [] })
  // history!: HistoryLogLine[];
}

export const PaperSchema = SchemaFactory.createForClass(PaperDocument);
