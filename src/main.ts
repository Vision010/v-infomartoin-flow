import { NestFactory } from '@nestjs/core';
import { AppModule } from '@modules/app.module';

import getConfig from '@config/configuration';
import { ResponseInterceptor } from '@interceptors/response.interceptor';
// import { BusinessExceptionFilter } from '@filters/business-exception.filter';
import { HttpExceptionFilter } from '@filters/http-exception.filter';
import { ValidationPipe } from '@pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ResponseInterceptor());
  // app.useGlobalFilters(new BusinessExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(getConfig().port);
}
bootstrap();
