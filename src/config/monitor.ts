import config from '@config/configuration';
import { StatusMonitorConfiguration } from 'nestjs-status-monitor';

console.log(config().port, 'config().port');

const monitorConfig = {
  title: 'NestJS Status',
  path: '/status',
  socketPath: '/socket.io',
  port: 8000,
  spans: [
    {
      interval: 1,
      retention: 60, // Keep 60 datapoints in memory
    },
    {
      interval: 5,
      retention: 60,
    },
    {
      interval: 15,
      retention: 60,
    },
  ],
  chartVisibility: {
    cpu: true,
    mem: true,
    load: true,
    eventLoop: true,
    heap: true,
    responseTime: true,
    rps: true,
    statusCodes: true,
  },
  ignoreStartsWith: ['/admin'],
  healthChecks: [
    {
      protocol: 'http',
      host: 'localhost',
      path: '/health/alive',
      port: 8000,
    },
    {
      protocol: 'http',
      host: 'localhost',
      path: '/health/dead',
      port: 8000,
    },
  ],
} as unknown as StatusMonitorConfiguration;

export default monitorConfig;
