import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  //   @Desc Get /user/dashboard
  @UseGuards(AuthenticatedGuard)
  @Get('dashboard')
  login(@Request() req): any {
    return req.user;
  }
}
