import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  Query,
  Res,
  Param,
  NotFoundException,
  HttpStatus,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { createSwapDto } from './dto/create-swap.dto';
import { BooksService } from './books.service';
// import { AuthenticatedGuard } from '../auth/auth.guard';
// import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  // @Desc Post /books/swap
  @Post('/swap')
  public async createSwap(@Res() res, @Body() createSwapDto: createSwapDto) {
    const {
      userid,
      title,
      author,
      shortdesc,
      picture,
      typetag,
      lookingfor,
      createdDate,
    } = await this.booksService.swap(createSwapDto);
    return res.status(HttpStatus.OK).json({
      userid,
      title,
      author,
      shortdesc,
      picture,
      typetag,
      lookingfor,
      createdDate,
    });
  }
}
