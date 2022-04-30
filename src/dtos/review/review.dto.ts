import { REVIEW_DECISION } from '../../enums/review-decision.enum';
import { REVIEW_KIND } from '../../enums/review-kind.enum';
import { REVIEW_STATUS } from '../../enums/review-status.enum';
import { FileMetadata } from '../general/file-metadata';

export class ReviewDTO {
  _id!: string;
  creator!: string;
  title!: string;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  publicationDate!: Date;
  wasInvited?: boolean;
  transactions?: Record<string, unknown>;
  doi?: string;
  socialComments!: string[];
  canBeReviewed!: boolean;
  reward?: number;
  revealReviewerIdentity!: boolean;
  paper: string;
  decision?: REVIEW_DECISION;
  status!: REVIEW_STATUS;
  file?: FileMetadata;
  kind!: REVIEW_KIND;
}
