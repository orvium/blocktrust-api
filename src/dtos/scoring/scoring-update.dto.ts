import { IsDate, IsNumber } from 'class-validator';

export class ScoringUpdateDTO {
  @IsNumber() score: number;
  @IsDate() timestamp: Date;
}
