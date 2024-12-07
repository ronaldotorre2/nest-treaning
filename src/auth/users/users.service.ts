import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { PrismaService } from 'src/prisma/prisma.service';

import { UserDto } from './dto/user.dto';
import { UserRoles } from './user-roles';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  createAdmin(data: UserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.ADMIN],
      },
    });
  }

  createPartner(data: UserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.PARTNER],
      },
    });
  }

  createUser(data: UserDto) {
    return this.prismaService.user.create({
      data: {
        ...data,
        password: this.generateHash(data.password),
        roles: [UserRoles.USER],
      },
    });
  }

  getAll() {
    return this.prismaService.user.findMany();
  }

  generateHash(password: string) {
    return bcrypt.hashSync(password, 10);
  }
}