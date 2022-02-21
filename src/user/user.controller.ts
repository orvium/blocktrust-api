import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UserCreateDTO } from '../dtos/user/user-create.dto';
import { UserUpdateDTO } from '../dtos/user/user-update.dto';
import { UserDTO } from '../dtos/user/user.dto';
import { UserDocument } from './user.schema';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  /**
   * Get user by id
   */
  @Get(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: UserDTO,
  })
  async getById(@Param('id') id: string): Promise<UserDocument> {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException(`User not found`);
    return await this.userService.findById(id);
  }

  /**
   * Get all users
   */
  @Get()
  @ApiOkResponse({
    type: UserDTO,
  })
  async getAll(): Promise<UserDocument[]> {
    return await this.userService.find({});
  }


  /**
   * Create new user
   */
  @Post()
  @ApiCreatedResponse({
    type: UserDTO,
  })
  async create(@Body() payload: UserCreateDTO) {
    return await this.userService.create(payload);
  }

  /**
   * Update donor
   */
  @Patch(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: UserDTO,
  })
  async update(@Param('id') id: string, @Body() payload: UserUpdateDTO) {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException(`User not found`);
    Object.assign(user, payload);
    return await user.save();
  }

  /**
   * Delete user
   */
  @Delete(':id([0-9a-f]{24})')
  @ApiOkResponse({
    type: UserDTO,
  })
  async delete(@Param('id') id: string) {
    const user = await this.userService.findById(id);
    if (!user) throw new NotFoundException(`User not found`);
    return await user.remove();
  }
}
