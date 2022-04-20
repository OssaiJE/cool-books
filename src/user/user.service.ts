import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './schema/user.schema';
import { createUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  /**
   * Create a user interface
   * @param createUserDto
   */
  async create(createUserDto: createUserDto): Promise<User> {
    const existingUser = await this.findUserByEmail(createUserDto.email);
    if (existingUser) {
      throw new NotFoundException(`User ${createUserDto.email} already exist!`);
    }
    const createUser = new this.userModel(createUserDto);
    const { password } = createUser;
    const salt = await bcrypt.genSalt(10);
    createUser.password = await bcrypt.hash(password, salt);
    return createUser.save();
  }
  //   find user by email
  async findUserByEmail(email: string): Promise<any> {
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      return null;
    }
    return user;
  }
}
