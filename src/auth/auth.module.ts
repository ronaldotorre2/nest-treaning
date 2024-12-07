import { Module } from '@nestjs/common';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { AdminUsersController } from './admin-users/admin-users.controller';
import { PartnerUsersController } from './partner-users/partner-users.controller';


@Module({
  imports: [],
  controllers: [UsersController, AdminUsersController, PartnerUsersController],
  providers: [UsersService],
})
export class AuthModule {}
