import { IsNotEmpty } from 'class-validator';

export class UserCreateDTO {
  @IsNotEmpty() firstName: string;
  @IsNotEmpty() lastName: string;
}
