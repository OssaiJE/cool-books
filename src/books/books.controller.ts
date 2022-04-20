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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname, join } from 'path';
import { diskStorage } from 'multer';
import { createSwapDto } from './dto/create-swap.dto';
import { BooksService } from './books.service';

// import { AuthenticatedGuard } from '../auth/auth.guard';
// import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  // @Desc Post /books/swap
  @Post('/swap')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  public async createSwap(
    @Res() res,
    @Body() @UploadedFile() file,
    createSwapDto: createSwapDto,
  ) {
    // const file = {
    //   originalname: file.originalname,
    //   filename: file.filename,
    // };

    // console.log(file);

    const {
      userid,
      title,
      author,
      shortdesc,
      //   file,
      typetag,
      lookingfor,
      createdDate,
    } = await this.booksService.swap(createSwapDto, file);
    return res.status(HttpStatus.OK).json({
      userid,
      title,
      author,
      shortdesc,
      file,
      typetag,
      lookingfor,
      createdDate,
    });
  }
}
