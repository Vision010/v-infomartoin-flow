import { HttpException } from '@nestjs/common';

export class BusinessException extends HttpException {
  constructor(res = 'BusinessException') {
    super(res, 200);
  }
}
