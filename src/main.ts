import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Hello Nest GKE')
  .setDescription(
    'An API that allows access to Github user data from a TELUS ID or email'
  )
  .setVersion('0.0.1')
  .addTag('TeamDex')
  .build();
const options: SwaggerDocumentOptions = {
  operationIdFactory: (_: string, methodKey: string) => methodKey
};
const document = SwaggerModule.createDocument(app, config, options);
SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
