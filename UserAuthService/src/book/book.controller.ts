import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookService } from './book.service';
import { CreateSwapDto } from './dto/create-swap.dto';
import { upload } from './helpers/upload-storage';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  //   @Desc Post /book/swap
  @Post('/swap')
  @UseInterceptors(FileInterceptor('image', { upload }))
  createSwap(@Body() createSwap: CreateSwapDto) {
    this.bookService.createSwap(createSwap);
  }
}
