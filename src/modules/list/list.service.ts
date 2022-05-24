import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class ListService {
  constructor(private readonly httpService: HttpService) {}

  getList(): Observable<AxiosResponse<any>> {
    return this.httpService
      .post(
        'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed',
        {
          id_type: 2,
          client_type: 2608,
          sort_type: 300,
          cursor: '0',
          limit: 20,
        },
      )
      .pipe(map((response) => response.data));
  }
}
