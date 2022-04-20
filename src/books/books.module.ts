import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { Books, BooksSchema } from './schema/books.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Books', schema: BooksSchema }]),
    MulterModule.register({ dest: './images' }),
  ],
  providers: [BooksService],
  controllers: [BooksController],
})
export class BooksModule {}
