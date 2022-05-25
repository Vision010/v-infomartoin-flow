import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { JuejinService } from './juejin.service';
import { CreateJuejinDto } from './dto/create-juejin.dto';
import { UpdateJuejinDto } from './dto/update-juejin.dto';

@Controller('juejin')
export class JuejinController {
  constructor(private readonly juejinService: JuejinService) {}

  @Get('/index')
  index() {
    return this.juejinService.getList({
      id_type: 2,
      client_type: 2608,
      sort_type: 300,
      cursor: '0',
      limit: 20,
    });
  }

  @Post()
  create(@Body() createJuejinDto: CreateJuejinDto) {
    return this.juejinService.create(createJuejinDto);
  }

  @Get()
  findAll() {
    return this.juejinService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.juejinService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJuejinDto: UpdateJuejinDto) {
  //   return this.juejinService.update(+id, updateJuejinDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.juejinService.remove(+id);
  // }
}
