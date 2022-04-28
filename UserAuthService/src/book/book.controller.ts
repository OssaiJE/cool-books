import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateSwapDto } from './dto/create-swap.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  //   @Desc Post /book/swap
  @Post('/market')
  createSwap(@Body() createSwap: CreateSwapDto) {
      
  };
}
