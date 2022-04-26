import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserInterface } from './interface/user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //@Desc Post /user/signup
  @Post('/signup')
  createuser(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.creatUser(createUserDto);
  }
}
