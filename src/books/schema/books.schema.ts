import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BooksDocument = Books & Document;
@Schema()
export class Books extends Document {
  @Prop({ required: false })
  userid: string;

  @Prop({ required: false })
  title: string;

  @Prop({ required: false })
  author: string;

  @Prop({ required: false })
  shortdesc: string;

  @Prop({ required: false })
  file: string;

  @Prop({ required: false })
  typetag: string;

  @Prop({ required: false })
  lookingfor: string;

  @Prop({ default: Date.now })
  createdDate: Date;
}

export const BooksSchema = SchemaFactory.createForClass(Books);
