import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interface/user.interface';
import { UserService } from './user.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //@Desc Post /user/signup
  @Post('/signup')
  createuser(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.creatUser(createUserDto);
  }

  //   @Desc Post /user/signin
  @UseGuards(LocalAuthGuard)
  @Post('/signin')
  signin(@Request() req): any {
    const { firstname, lastname, email, createdDate } = req.user;
    return { firstname, lastname, email, createdDate };
  }

  //   @Desc Get /user
  @UseGuards(AuthenticatedGuard)
  @Get()
  getUser(@Request() req): any {
    console.log(req.user);
    return req.user;
  }
}
