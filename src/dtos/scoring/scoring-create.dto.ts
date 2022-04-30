import { IsNotEmpty, IsString } from 'class-validator';

export class ScoringCreateDTO {
  @IsString() @IsNotEmpty() reputationModel!: string;
  @IsString() @IsNotEmpty() paper!: string;
}
