import { Body, Controller, Post } from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { UserDto } from '../users/user.dto';
import { UserView } from '../users/user.view';

@Controller('partner-users')
export class PartnerUsersController {
  constructor(private userService: UsersService) {}

  @Post('/partner')
  async create(@Body() data: UserDto) {
    const user = await this.userService.createUser(data);
    return new UserView(user);
  }
}
