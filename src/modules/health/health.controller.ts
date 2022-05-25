import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get('alive')
  alive() {
    return 'ok';
  }

  @Get('dead')
  dead() {
    return 'ok';
  }
}
