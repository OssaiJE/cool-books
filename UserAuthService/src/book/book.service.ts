import { Inject, Injectable, Request } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
// import { diskStorage } from 'multer';
import { CreateSwapDto } from './dto/create-swap.dto';
import { CreateSwapEvent } from './helpers/create-swap.event';

@Injectable()
export class BookService {
  constructor(
    @Inject('BOOKSERVICE') private readonly bookClient: ClientProxy,
  ) {}

  //   Create swap method
  async createSwap(
    createSwap: CreateSwapDto,
    imagepath: string,
    userid: string,
  ) {
    const { title, author, shortdesc, typetag, lookingfor } = createSwap;
    // console.log(typeof userid);
    this.bookClient.emit(
      'swap_created',
      new CreateSwapEvent(
        userid,
        title,
        author,
        shortdesc,
        imagepath,
        typetag,
        lookingfor,
      ),
    );
  }
}
