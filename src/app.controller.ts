import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Desc get /
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //   @Desc Post /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return { msg: 'Logged in' };
  }

  //   @Desc Post /register
  @Post('register')
  register(): any {
    return {};
  }
}
