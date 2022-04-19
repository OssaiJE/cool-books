import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(public userService: UserService) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findUserByEmail(email);
    // console.log('hi local strategy');
    if (user && user.password === password) {
      //   const { password, ...rest } = user;
      return user;
    }
    return null;
  }
}
