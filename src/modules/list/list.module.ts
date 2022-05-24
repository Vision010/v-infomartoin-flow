import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { ListController } from './list.controller';
import { ListService } from './list.service';

@Module({
  imports: [HttpModule],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
