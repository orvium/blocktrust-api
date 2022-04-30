import { IsBoolean, IsDate, IsNumber, IsOptional, IsString } from 'class-validator';
import { REVIEW_DECISION } from '../../enums/review-decision.enum';
import { REVIEW_STATUS } from '../../enums/review-status.enum';

export class ReviewUpdateDTO {
  @IsOptional() @IsString() comment?: string;
  @IsOptional() @IsString() status?: REVIEW_STATUS;
  @IsOptional() @IsNumber() reward?: number;
  @IsOptional() @IsBoolean() revealReviewerIdentity?: boolean;
  @IsOptional() @IsString() decision?: REVIEW_DECISION;
  @IsOptional() @IsString() doi?: string;
  @IsOptional() transactions?: unknown;
  @IsOptional() @IsDate() publicationDate?: Date;
  @IsOptional() @IsBoolean() wasInvited?: boolean;
}
