import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from './../users/users.service';
import { UserDto } from '../users/user.dto';
import { UserView } from '../users/user.view';

@Controller('admin-users')
export class AdminUsersController {
  constructor(private userService: UsersService) {}

  @Post('/admin')
  async createAdmin(@Body() data: UserDto) {
    const user = await this.userService.createAdmin(data);
    return new UserView(user);
  }
}
