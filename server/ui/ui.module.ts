import { Module } from '@nestjs/common';
import { NextModule } from '@nestpress/next';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { UiController } from './ui.controller';

@Module({
  imports: [
    NextModule,
    UserModule,
    AuthModule
  ],
  controllers: [
    UiController,
  ],
  providers: [
  ],
})
export class UiModule { }
