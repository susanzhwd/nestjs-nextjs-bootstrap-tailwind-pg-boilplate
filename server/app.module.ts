import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
// import typeOrmConfig from  '../ormconfig.json';
import { isNil } from '@nestjsx/util';
import { NextMiddleware, NextModule } from '@nestpress/next';
import { RouterModule } from 'nest-router/router.module';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { UiModule } from './ui/ui.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // ConfigModule.forRoot({ isGlobal: true }),
    RouterModule.forRoutes([
      {
        path: '/api',
        children: [
          {
            path: '/users',
            module: UserModule,
          },
          {
            path: '/auth',
            module: AuthModule,
          },
        ]
      }
    ]),
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: (process.env.TYPEORM_CONNECTION as any) || 'postgres',
      host: !isNil(process.env.DB_HOST) ? process.env.DB_HOST : '127.0.0.1',
      port: !isNil(process.env.DB_PORT) ? parseInt(process.env.DB_PORT!, 10) : (((process.env.TYPEORM_CONNECTION as any) || 'postgres') === 'postgres' ? 5432 : 3306),
      username: !isNil(process.env.DB_USERNAME) ? process.env.DB_USERNAME : 'root',
      password: !isNil(process.env.DB_PASSWORD) ? process.env.DB_PASSWORD : 'root',
      database: process.env.DB_DATABASE,
      synchronize: process.env.NODE_ENV == 'production' ? false : (!isNil(process.env.DB_SYNCHRONIZE) ? Boolean(process.env.DB_SYNCHRONIZE) : true),
      logging: !isNil(process.env.TYPEORM_LOGGING)
        ? !!parseInt(process.env.TYPEORM_LOGGING!, 10)
        : true,
      // cache: {
      //   type: 'redis',
      //   options: {
      //     host: '127.0.0.1',
      //     port: 6399,
      //   },
      // },
      entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    }),
    // TypeOrmModule.forRoot({
    //   type: typeOrmConfig.type as any || 'postgres',
    //   host: !isNil(typeOrmConfig.host) ? typeOrmConfig.host : '127.0.0.1',
    //   port: !isNil(typeOrmConfig.port) ? typeOrmConfig.port : ((typeOrmConfig.type as any || 'postgres') === 'postgres' ? 5432 : 3306),
    //   username: !isNil(typeOrmConfig.username) ? typeOrmConfig.username : 'root',
    //   password: !isNil(typeOrmConfig.password) ? typeOrmConfig.password : 'root',
    //   database: typeOrmConfig.database,
    //   synchronize: true,
    //   logging: !isNil(typeOrmConfig.logging)
    //     ? typeOrmConfig.logging
    //     : true,
    //   // cache: {
    //   //   type: 'redis',
    //   //   options: {
    //   //     host: '127.0.0.1',
    //   //     port: 6399,
    //   //   },
    //   // },
    //   entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    // }),
    NextModule, UserModule, UiModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    this.handleAssets(consumer);
  }

  private handleAssets(consumer: MiddlewareConsumer): void {
    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: '_next*',
        method: RequestMethod.GET,
      });

    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: 'images/*',
        method: RequestMethod.GET,
      });

    consumer
      .apply(NextMiddleware)
      .forRoutes({
        path: 'favicon.ico',
        method: RequestMethod.GET,
      });
  }

}
