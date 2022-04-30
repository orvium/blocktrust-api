import { Body, Controller, NotFoundException, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginData } from '../dtos/general/login-data';
import { UserDTO } from '../dtos/user/user.dto';
import { UserService } from '../user/user.service';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private userService: UserService) {
  }

  /**
   * Login
   */
  @Post()
  @ApiOkResponse({
    type: UserDTO,
  })
  async login(@Body() payload: LoginData) {
    const user = await this.userService.findOne({ email: payload.email });
    if (!user) throw new NotFoundException('User not found!');
    return user;
  }
}
