import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUser(): string {
    return 'usuario';
  }

  @Post()
  create(@Body() data: UserDto) {
    return this.userService.create(data);
  }
}
