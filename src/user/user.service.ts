import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
};

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'julius',
      username: 'me@me.me',
      password: '123456',
    },
    {
      id: 2,
      name: 'julius2',
      username: 'me2@me.me',
      password: '123456',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
