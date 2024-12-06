import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { UserDto } from './dto/user.dto';
import { UserRoles } from './user-roles';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(data: UserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        roles: [UserRoles.ADMIN],
      },
    });
  }

}