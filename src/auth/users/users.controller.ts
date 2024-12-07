import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './user.dto';
import { UserView } from './user.view';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async create(@Body() data: UserDto) {
    const user = await this.userService.createUser(data);
    return new UserView(user);
  }
}
