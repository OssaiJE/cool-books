import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BooksDocument = Books & Document;
@Schema()
export class Books extends Document {
  @Prop({ required: true })
  userid: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop({ required: true })
  shortdesc: string;

  @Prop({ required: true })
  picture: string;

  @Prop({ required: true })
  typetag: string;

  @Prop({ required: true })
  lookingfor: string;

  @Prop({ default: Date.now })
  createdDate: Date;
}

export const UserSchema = SchemaFactory.createForClass(Books);
