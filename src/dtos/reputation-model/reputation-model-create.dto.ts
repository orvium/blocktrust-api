import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ReputationModelCreateDTO {
  @IsString() @IsNotEmpty() creator!: string;
  @IsString() @IsNotEmpty() name!: string;
  @IsString() @IsNotEmpty() @IsUrl() sourceCodeURL!: string;
}
