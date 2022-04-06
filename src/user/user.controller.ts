import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../auth/auth.guard';

@Controller('user')
export class UserController {
  //   @Desc Get /user/dashboard
  @UseGuards(AuthenticatedGuard)
  @Get('dashboard')
  dashboard(@Request() req): any {
    // req.user === return ...rest @auth.service.ts
    return req.user;
  }
}
