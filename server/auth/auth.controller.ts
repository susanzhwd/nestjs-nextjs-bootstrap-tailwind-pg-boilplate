import { Body, Controller, Get, HttpException, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UserCreateDto, UserLoginDto } from '../user/user.dto';
import { JwtPayload, RegistrationStatus } from './auth.interface';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  public async register(
    @Body() createUserDto: UserCreateDto,
  ): Promise<RegistrationStatus> {
    const result: RegistrationStatus = await this.authService.register(
      createUserDto,
    );

    if (!result.success) {
      throw new HttpException(result.message, HttpStatus.BAD_REQUEST);
    }

    return result;
  }

  @Post('login')
  public async login(@Body() loginUserDto: UserLoginDto, @Res() res: Response) {
    const result = await this.authService.login(loginUserDto);
    this.setJwtToCookie(res, result.accessToken)
    res.send(result);
  }

  private setJwtToCookie(res: Response, accessToken) {
    res.cookie(process.env.JWT_COOKIE_NAME, accessToken, {
      httpOnly: process.env.JWT_COOKIE_HTTPONLY === "true" ? true : false,
      secure: process.env.JWT_COOKIE_SECURE === "true" ? true : false,
      maxAge: Number(process.env.JWT_COOKIE_MAXAGE)
    });
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/login')

  // async login(@Body() user: UserLogin) {
  //   return this.authService.login(req.user);
  // }

  @Get('whoami')
  @UseGuards(JwtAuthGuard)
  public async testAuth(@Req() req: { user: JwtPayload | PromiseLike<JwtPayload> }): Promise<JwtPayload> {
    return req.user;
  }

  @Get('/facebook')
  @UseGuards(AuthGuard('facebook-token'))
  async facebookLogin(@Req() req: Request, @Res() res: Response) {
    const result = await this.authService.getLoginResponse(req.user);
    this.setJwtToCookie(res, result.accessToken)
    res.send(result);
  }

  @Get('/facebook/redirect')
  @UseGuards(AuthGuard('facebook-token'))
  async facebookLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      payload: req.user,
    };
  }

  @Get('/google')
  @UseGuards(AuthGuard('google-token'))
  async googleLogin(@Req() req: Request, @Res() res: Response) {
    const result = await this.authService.getLoginResponse(req.user);
    this.setJwtToCookie(res, result.accessToken)
    res.send(result);
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google-token'))
  async googleLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      payload: req.user,
    };
  }

  @UseGuards(AuthGuard('twitter-token'))
  async twitterLogin(@Req() req: Request, @Res() res: Response) {
    const result = await this.authService.getLoginResponse(req.user);
    this.setJwtToCookie(res, result.accessToken)
    res.send(result);
  }

  @Get('/twitter/redirect')
  @UseGuards(AuthGuard('twitter-token'))
  async twitterLoginRedirect(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      payload: req.user,
    };
  }

  @Get('/twitter/callback')
  @UseGuards(AuthGuard('twitter-token'))
  async twitterLoginCallback(@Req() req: Request): Promise<any> {
    return {
      statusCode: HttpStatus.OK,
      payload: req.user,
    };
  }
}
