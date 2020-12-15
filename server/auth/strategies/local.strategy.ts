import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserLoginDto } from 'server/user/user.dto';
import { User } from 'server/user/user.entity';
import { AuthService } from '../auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async validate(userLogin: UserLoginDto): Promise<User> {
        const user = await this.authService.validateUser(userLogin);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
