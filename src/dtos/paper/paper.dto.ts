export class PaperDTO {
  _id: string;
  creator: string;
  title: string;
  abstract: string;
  createdOn: Date;
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



  // assignee: string;
  // ownerProfile: UserSummaryDTO;
  // nickname: string;
  // publicationType: PUBLICATION_TYPE;
  // accessRight: ACCESS_RIGHT;
  // status: DEPOSIT_STATUS;
  // peerReviews: ReviewSummaryDTO[];
  // reviewType: REVIEW_TYPE;
  // authors: AuthorDTO[];
  // publicationFile: FileMetadata;
  // files: FileMetadata[];
  // gravatar: string;
  // keccak256: string;
  // url: string;
  // pdfUrl: string;
  // community: CommunityDTO;
  // html: string;
  // actions: string[];
  // track: string;
  // history: HistoryLogLine[];
}
