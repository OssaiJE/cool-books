// import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
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
import { createUserDto } from './dto/create-user.dto';
// import { AuthenticatedGuard } from '../auth/auth.guard';
import { UserService } from './user.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Desc Post /user/register

  @Post('/register')
  public async createUser(@Res() res, @Body() createUserDto: createUserDto) {
    const { firstname, lastname, email, createdDate } =
      await this.userService.create(createUserDto);
    return res
      .status(HttpStatus.OK)
      .json({ firstname, lastname, email, createdDate });
  }

  //   @Desc Post /user/login
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    const { firstname, lastname, email, createdDate } = req.user;
    return { firstname, lastname, email, createdDate };
  }
  //   @Desc Get /user/dashboard
  //   @UseGuards(AuthenticatedGuard)
  //   @Get('dashboard')
  //   dashboard(@Request() req): any {
  //     // req.user === return ...rest @auth.service.ts
  //     return req.user;
  //   }
}
