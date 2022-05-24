import { Injectable, NestInterceptor, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  code: number;
  data?: T;
  message?: string;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(_, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map((data) => {
        return { data, code: 200 };
      }),
    );
  }
}
