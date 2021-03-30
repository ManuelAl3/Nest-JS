import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}//Aquí se injecta AppService en el constructor

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
