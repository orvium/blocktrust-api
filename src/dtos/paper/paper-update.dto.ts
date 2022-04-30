import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { PAPER_STATUS } from '../../enums/paper-status.enum';
import { PAPER_TYPE } from '../../enums/paper-type.enum';
import { REVIEW_TYPE } from '../../enums/review-type.enum';
import { Author } from '../general/author';

export class PaperUpdateDTO {
  @IsOptional() @IsString() title?: string;
  @IsOptional() @IsString() abstract?: string;
  @IsOptional() @IsDate() submissionDate?: Date;
  @IsOptional() @IsDate() publicationDate?: Date;
  @IsOptional() @IsString({ each: true }) keywords?: string[];
  @IsOptional() transactions?: unknown;
  @IsOptional() @IsString() doi?: string;
  @IsOptional() @IsString({ each: true }) disciplines?: string[];
  @IsOptional() references?: unknown;
  @IsOptional() @IsBoolean() canBeReviewed?: boolean;
  @IsOptional() @IsString() gitRepository?: string;
  @IsOptional() @IsString() paperType?: PAPER_TYPE;
  @IsOptional() @IsString() status?: PAPER_STATUS;
  @IsOptional() @IsString() reviewType?: REVIEW_TYPE;
  @IsOptional() @Type(() => Author) authors?: Author[];
}
