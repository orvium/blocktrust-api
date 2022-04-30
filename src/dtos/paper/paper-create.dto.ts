import { IsNotEmpty, IsString } from 'class-validator';

export class PaperCreateDTO {
  @IsNotEmpty() @IsString() title!: string;
  @IsNotEmpty() @IsString() creator!: string;
}
