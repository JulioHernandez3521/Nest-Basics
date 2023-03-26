import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,//Para limpiar las propiedades que no estan en el dto
      forbidNonWhitelisted:true //para marcar un error de los parametros que no deben ser enviados
    })
  );
  await app.listen(3000);
}
bootstrap();
