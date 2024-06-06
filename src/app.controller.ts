import { Controller, Get } from '@nestjs/common';
import { AppService, Response } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Response {
    return this.appService.getHello();
  }
}