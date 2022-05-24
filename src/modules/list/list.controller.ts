import { Controller, Get } from '@nestjs/common';

import { ListService } from './list.service';

@Controller('/list')
export class ListController {
  constructor(private readonly service: ListService) {}

  @Get()
  getHello() {
    return this.service.getList();
  }
}
