import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '@config/configuration';

import { CatModule } from '@modules/cats/cat.module';

import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    CatModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const database = configService.get('database');

        return {
          uri: database.host,
        };
      },
    }),
  ],
  controllers: [ListController],
  providers: [ListService],
})
export class AppModule {}
