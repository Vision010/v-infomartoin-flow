import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Cat } from '@schemas/cat/cat.schema';

import { CreateCatDto } from './create-cat.dto';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await this.catService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cat> {
    return this.catService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.catService.delete(id);
  }
}
