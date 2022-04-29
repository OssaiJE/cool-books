import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { BookService } from './book.service';
import { CreateSwapEvent } from './helpers/create-swap.event';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @EventPattern('swap_created')
  swapBook(data: CreateSwapEvent) {
    this.bookService.createSwap(data);
  }
}
