import { Injectable } from '@nestjs/common';

@Injectable() //Injectable indica la inyeccion de dependencias
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
