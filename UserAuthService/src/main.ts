import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'my secret', // TODO: add in env vars
      resave: false,
      saveUninitialized: true,
      cookie: { /*secure: true */ maxAge: 3600000 },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000); // TODO: add port in env vars
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
