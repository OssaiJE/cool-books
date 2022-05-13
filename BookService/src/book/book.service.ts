import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSwapEvent } from './helpers/create-swap.event';
import { BookInterface } from './interface/book.interface';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly bookModel: Model<BookInterface>,
  ) {}

  //    @Desc create swap method
  async createSwap(data: CreateSwapEvent) {
    console.log('CreateSwap - BookService', data);
  }
}
