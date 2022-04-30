import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateSwapDto } from './dto/create-swap.dto';
import { CreateSwapEvent } from './helpers/create-swap.event';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOKSERVICE') private readonly bookClient: ClientProxy,
  ) {}

  async createSwap(createSwap: CreateSwapDto) {
    const { userid, title, author, shortdesc, typetag, lookingfor } =
      createSwap;
    this.bookClient.emit(
      'swap_created',
      new CreateSwapEvent(
        userid,
        title,
        author,
        shortdesc,
        typetag,
        lookingfor,
      ),
    );
  }
}
