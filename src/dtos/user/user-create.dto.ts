import { IsNotEmpty, IsString } from 'class-validator';

export class UserCreateDTO {
  @IsNotEmpty() @IsString() firstName: string;
  @IsNotEmpty() @IsString() lastName: string;
  @IsNotEmpty() @IsString() sub: string;
}
