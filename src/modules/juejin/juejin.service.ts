import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

import { ARTICLE_LIST } from './const';
import { QueryListDto } from './dto/query-list.dto';
import { CreateJuejinDto } from './dto/create-juejin.dto';
import { UpdateJuejinDto } from './dto/update-juejin.dto';

@Injectable()
export class JuejinService {
  constructor(private readonly httpService: HttpService) {}

  getList(params: QueryListDto) {
    return this.httpService
      .post(ARTICLE_LIST, params)
      .pipe(map((response) => response.data));
  }

  create(createJuejinDto: CreateJuejinDto) {
    return 'This action adds a new juejin';
  }

  findAll() {
    return `This action returns all juejin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} juejin`;
  }

  update(id: number, updateJuejinDto: UpdateJuejinDto) {
    return `This action updates a #${id} juejin`;
  }

  remove(id: number) {
    return `This action removes a #${id} juejin`;
  }
}
