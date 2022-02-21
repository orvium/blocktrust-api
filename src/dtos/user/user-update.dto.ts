import { IsOptional } from 'class-validator';
import { USER_TYPE } from '../../user/user.schema';

export class UserUpdateDTO {
  @IsOptional() firstName?: string;
  @IsOptional() lastName?: string;
  @IsOptional() email?: string;
  @IsOptional() aboutMe?: string;
  @IsOptional() orcid?: string;
  @IsOptional() linkedin?: string;
  @IsOptional() blog?: string;
  @IsOptional() role?: string;
  @IsOptional() starredPapers?: string[];
  @IsOptional() isOnboarded?: boolean;
  @IsOptional() acceptedTC?: boolean;
  @IsOptional() disciplines?: string[];
  @IsOptional() userType?: USER_TYPE;
}
