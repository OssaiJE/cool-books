import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';
import { CreateUser } from './dto/create-user.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('BookService') private readonly bookClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(createUser: CreateUser) {
    this.users.push(createUser);
    this.bookClient.emit(
      'user_created',
      new CreateUserEvent(createUser.email, createUser.lastname),
    );
  }
}
