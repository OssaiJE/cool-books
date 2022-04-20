import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Books, BooksDocument } from './schema/books.schema';
import { createSwapDto } from './dto/create-swap.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Books') private booksModel: Model<BooksDocument>) {}

  /**
   * Create books interface
   * @param createSwapDto
   */
  async swap(createSwapDto: createSwapDto): Promise<Books> {
    const createSwap = new this.booksModel(createSwapDto);
    //   const { userid } = createSwap;
    return createSwap.save();
  }
}
