import {
  Body,
  Controller,
  Post,
  Request,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthenticatedGuard } from 'src/auth/auth.guard';
import { BookService } from './book.service';
import { CreateSwapDto } from './dto/create-swap.dto';
import { multerOptions } from './helpers/upload-storage';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  //   @Desc Post /book/swap
  @UseGuards(AuthenticatedGuard)
  @Post('/swap')
  @UseInterceptors(FileInterceptor('image', multerOptions))
  createSwap(
    @Body() createSwap: CreateSwapDto,
    @UploadedFile() image,
    @Request() req,
  ) {
    const imagepath: string = image.path;
    const userid: string = req.user._id;
    // console.log(req.user._id.toString());
    this.bookService.createSwap(createSwap, imagepath, userid);
  }
}
