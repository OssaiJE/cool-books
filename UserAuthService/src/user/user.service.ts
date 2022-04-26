import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  // Create user to the database
  async creatUser(createUserDto: CreateUserDto): Promise<UserInterface> {
    //   Check or existing user
    const existingUser = await this.findUserByEmail(createUserDto.email);
    if (existingUser) {
      throw new NotFoundException(`User ${createUserDto.email} already exist!`);
    }
    // Creates new user
    const newUser = new this.userModel(createUserDto);
    // Extract and hash password
    const { password } = newUser;
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    return await newUser.save();
  }

  //   find user by email
  async findUserByEmail(email: string): Promise<UserInterface> {
    const user = await this.userModel.findOne({ email: email });
    if (!user) {
      return null;
    }
    return user;
  }
}
