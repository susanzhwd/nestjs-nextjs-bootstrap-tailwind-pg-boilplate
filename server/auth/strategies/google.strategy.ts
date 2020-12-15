import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import { Strategy as GoogleTokenStrategy } from 'passport-google-token';
import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleStrategy {
    constructor(
        private readonly userService: UserService,
    ) {
        this.init();
    }
    init() {
        use(
            new GoogleTokenStrategy(
                {
                    clientID: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                },
                async (
                    accessToken: string,
                    refreshToken: string,
                    profile: any,
                    done: any,
                ) => {
                    console.log(111111111, profile)
                    const user = await this.userService.findOrCreateSocialUser(
                        profile,
                    );
                    return done(null, user);
                },
            ),
        );
    }
}
