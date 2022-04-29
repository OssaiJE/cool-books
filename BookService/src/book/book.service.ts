import { Injectable } from '@nestjs/common';
import { CreateSwapEvent } from './helpers/create-swap.event';

@Injectable()
export class BookService {
  async createSwap(data: CreateSwapEvent) {
    console.log('CreateSwap - BookService', data);
  }
}
