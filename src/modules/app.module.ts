import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from '@config/configuration';
import monitorConfig from '@config/monitor';
// import { HttpModule } from '@nestjs/axios';
import { StatusMonitorModule } from 'nestjs-status-monitor';

import { CatModule } from '@modules/cats/cat.module';

import { ListModule } from './list/list.module';

@Module({
  imports: [
    StatusMonitorModule.forRoot(monitorConfig),
    ConfigModule.forRoot({
      load: [config],
    }),
    ListModule,
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
})
export class AppModule {}
