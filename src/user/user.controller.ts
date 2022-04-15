// import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
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
import { AuthenticatedGuard } from '../auth/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @Desc Post /user/register
  //   @Post('register')
  //   register(): any {
  //     return {};
  //   }

  @Post('/register')
  public async createUser(@Res() res, @Body() createUserDto: createUserDto) {
    // console.log(createUserDto, 'create user param::::::::::::::');
    const user = await this.userService.create(createUserDto);
    return res.status(HttpStatus.OK).json(user);
  }

  //   @Desc Get /user/dashboard
  //   @UseGuards(AuthenticatedGuard)
  //   @Get('dashboard')
  //   dashboard(@Request() req): any {
  //     // req.user === return ...rest @auth.service.ts
  //     return req.user;
  //   }
}
