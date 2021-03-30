import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);//Aquí se crea el modulo
  //await app.listen(3000);
  await app.listen(process.env.PORT || 8080);//Heroku corre el app con el puerto 8080 o port
}
bootstrap();
