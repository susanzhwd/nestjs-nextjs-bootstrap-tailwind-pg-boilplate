import { Injectable } from '@nestjs/common';
import { use } from 'passport';
import FacebookTokenStrategy from 'passport-facebook-token';
import { UserService } from '../../user/user.service';

@Injectable()
export class FacebookStrategy {
  constructor(
    private readonly userService: UserService,
  ) {
    this.init();
  }
  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: process.env.FB_APP_ID,
          clientSecret: process.env.FB_APP_SECRET,
          fbGraphVersion: 'v3.0',
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          const user = await this.userService.findOrCreateSocialUser(
            profile,
          );
          return done(null, user);
        },
      ),
    );
  }
}
