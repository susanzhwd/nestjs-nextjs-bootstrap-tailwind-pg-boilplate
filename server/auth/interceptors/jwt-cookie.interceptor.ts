import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtStrategy } from '../strategies/jwt.strategy';

@Injectable()
export class JwtCookieInterceptor implements NestInterceptor {
    constructor(private jwtStrategy: JwtStrategy) { }
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req: Request = context.switchToHttp().getRequest();
        this.jwtStrategy.success = (user, info) => {
            req.user = user;
        }
        this.jwtStrategy.error = (err) => {
            console.error(err);
        }
        this.jwtStrategy.fail = (err) => {
            console.error(err);
        }
        this.jwtStrategy.authenticate(req, process.env.JWT_SECRET)
        return next
            .handle();
    }
}