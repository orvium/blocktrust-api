import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { USER_TYPE } from '../../enums/user-type.enum';

export class UserUpdateDTO {
  @IsOptional() @IsString() firstName?: string;
  @IsOptional() @IsString() lastName?: string;
  @IsOptional() @IsString() email?: string;
  @IsOptional() @IsString() aboutMe?: string;
  @IsOptional() @IsString() orcid?: string;
  @IsOptional() @IsString() linkedin?: string;
  @IsOptional() @IsString() blog?: string;
  @IsOptional() @IsString() role?: string;
  @IsOptional() @IsString({ each: true }) starredPapers?: string[];
  @IsOptional() @IsBoolean() isOnboarded?: boolean;
  @IsOptional() @IsBoolean() acceptedTC?: boolean;
  @IsOptional() @IsString({ each: true }) disciplines?: string[];
  @IsOptional() userType?: USER_TYPE;
}
