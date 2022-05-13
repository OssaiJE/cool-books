import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;
@Schema()
export class Book extends Document {
  @Prop()
  userid: string;

  @Prop()
  title: string;

  @Prop()
  author: string;

  @Prop()
  shortdesc: string;

  @Prop()
  imagepath: string;

  @Prop()
  typetag: string;

  @Prop()
  lookingfor: string;

  @Prop({ default: Date.now })
  createdDate: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book);
