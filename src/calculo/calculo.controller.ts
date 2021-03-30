import { Controller, Get } from '@nestjs/common';

@Controller('calculo')
export class CalculoController {
    @Get()
    sumar() {
        let numero1:number= 30;
        let numero2:number= 20;

        return numero1 + numero2;
    }
}
