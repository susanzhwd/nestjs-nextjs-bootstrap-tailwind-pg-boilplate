import { NestFactory } from '@nestjs/core';
import { NextModule } from '@nestpress/next';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import rateLimit from 'express-rate-limit';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  // app.use(helmet());
  app.enableCors();
  // app.use(csurf());
  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000, // 1 minutes
      max: 1000, // limit each IP to 100 requests per windowMs
    }),
  );

  app.get(NextModule).prepare().then(() => {
    app.listen(process.env.APP_PORT, process.env.APP_HOST, async () => {
      console.log(`Ready on ${process.env.APP_PROTOCOL}://${process.env.APP_HOST}:${process.env.APP_PORT}`);
    });
  });
}

bootstrap();
