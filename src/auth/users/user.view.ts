import { User } from '@prisma/client';

export class UserView {
  constructor(readonly user: User) {}

  toJSON() {
    return {
      id: this.user.id,
      name: this.user.name,
      email: this.user.email,
      roles: this.user.roles,
      createdAt: this.user.createdAt,
      updatedAt: this.user.updatedAt,
    };
  }
}
