import { PAPER_STATUS } from '../../enums/paper-status.enum';
import { PAPER_TYPE } from '../../enums/paper-type.enum';
import { REVIEW_TYPE } from '../../enums/review-type.enum';
import { Author } from '../general/author';
import { FileMetadata } from '../general/file-metadata';
import { HistoryLogLine } from '../general/history-log-line';

export class PaperDTO {
  _id: string;
  creator: string;
  title: string;
  abstract: string;
  createdAt: Date;
  updatedAt: Date;
  submissionDate: Date;
  publicationDate: Date;
  keywords: string[];
  transactions: Record<string, unknown>;
  doi: string;
  disciplines: string[];
  references: string[];
  version: number;
  images: string[];
  socialComments: string[];
  canBeReviewed: boolean;
  gitRepository: string;
  openAireIdentifier: string;
  views: number;
  isLatestVersion: boolean;
  paperType: PAPER_TYPE;
  status: PAPER_STATUS;
  reviewType: REVIEW_TYPE;
  history: HistoryLogLine[];
  authors: Author[];
  publicationFile: FileMetadata;
}
