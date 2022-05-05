import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookService } from './book.service';
import { CreateSwapDto } from './dto/create-swap.dto';
import { multerOptions } from './helpers/upload-storage';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  //   @Desc Post /book/swap
  @Post('/swap')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  createSwap(@Body() createSwap: CreateSwapDto, @UploadedFile() image) {
    console.log(createSwap);
    console.log(image);
    // this.bookService.createSwap(createSwap);
  }
}
