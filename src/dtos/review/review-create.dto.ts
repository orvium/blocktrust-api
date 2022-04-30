import { IsNotEmpty, IsString } from 'class-validator';

export class ReviewCreateDTO {
  @IsString() @IsNotEmpty() title!: string;
  @IsString() @IsNotEmpty() creator!: string;
  @IsString() @IsNotEmpty() paper!: string;
}
