import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  async validateUser(email: string, password: string): Promise<any> {
    // if (email.trim() == null || '' || password.trim() == null || '') {
    //   return null;
    // }
    const user = await this.userService.findUserByEmail(email);
    // TODO: handle error of empty email properly
    if (!user) {
      return null;
    }
    const isMatch: boolean = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      return user;
    }
    return null;
  }
}
