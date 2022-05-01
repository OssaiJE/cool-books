import { Injectable } from '@nestjs/common';
import { CreateSwapEvent } from './helpers/create-swap.event';

@Injectable()
export class BookService {
  //    @Desc create swap method
  async createSwap(data: CreateSwapEvent) {
    console.log('CreateSwap - BookService', data);
  }
}
