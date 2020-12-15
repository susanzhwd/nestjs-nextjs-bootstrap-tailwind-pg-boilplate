import {
  Controller,
  Get,
  Req,
  Res,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { NextService } from '@nestpress/next';
import { Request, Response } from 'express';
import { UnauthorizedExceptionFilter } from '../auth/exception/filter/unauthorized-exception.filter';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtCookieInterceptor } from '../auth/interceptors/jwt-cookie.interceptor';

@Controller()
export class UiController {
  constructor(private readonly nextService: NextService) {}

  @Get()
  @UseInterceptors(JwtCookieInterceptor)
  public async index(@Req() req: Request, @Res() res: Response) {
    if (req.user) {
      return this.nextService.render('/home', req, res);
    } else {
      return this.nextService.render('/index', req, res);
    }
  }

  @Get('home')
  @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter)
  public async home(@Req() req: Request, @Res() res: Response) {
    return this.nextService.render('/about', req, res);
  }

  @Get('about')
  public async about(@Req() req: Request, @Res() res: Response) {
    return this.nextService.render('/about', req, res);
  }

  @Get('signIn')
  public async signIn(@Req() req: Request, @Res() res: Response) {
    return this.nextService.render('/signIn', req, res);
  }

  @Get('signUp')
  public async signUp(@Req() req: Request, @Res() res: Response) {
    return this.nextService.render('/signUp', req, res);
  }
}
