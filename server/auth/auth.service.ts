import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { use } from 'passport';
import { UserCreateDto, UserLoginDto } from 'server/user/user.dto';
import { User } from 'server/user/user.entity';
import { UserService } from '../user/user.service';
import { RegistrationStatus, JwtPayload, LoginStatus } from './auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async register(user: UserCreateDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'user registered',
    };

    try {
      await this.userService.createUser(user);
    } catch (err) {
      console.error(err)
      status = {
        success: false,
        message: err,
      };
    }

    return status;
  }

  async validateJwtPayload(payload: JwtPayload): Promise<any> {
    const user = await this.userService.findByEmailOrUsername(payload.email, payload.username);
    if (!user) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async validateUser(userLogin: UserLoginDto): Promise<any> {
    const user = await this.userService.findByLogin(userLogin);
    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  async login(userLogin: UserLoginDto): Promise<LoginStatus> {
    // find user in db
    const user = await this.userService.findByLogin(userLogin);

    return this.getLoginResponse(user);
  }

  getLoginResponse(user: Partial<User>): Promise<LoginStatus> {
    // generate and sign token
    const token = this.createToken(user);

    return {
      name: user.name,
      username: user.username,
      email: user.email,
      ...token,
    };
  }

  createToken({ username, email }: Partial<User>): any {
    const expiresIn = process.env.JWT_EXPIRES_IN;
    const user: JwtPayload = username ? { username, email } : { username: '', email };
    const accessToken = this.jwtService.sign(user); //, {secret: process.env.JWT_SECRET, expiresIn});
    return {
      expiresIn,
      accessToken,
    };
  }
}
