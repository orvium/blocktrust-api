import { IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class ReputationModelUpdateDTO {
  @IsOptional() @IsString() name!: string;
  @IsOptional() @IsString() description!: string;
  @IsOptional() @IsNumber() version!: number;
  @IsOptional() @IsString() @IsUrl() sourceCodeURL!: string;
  @IsOptional() @IsString() provider!: string;
}
