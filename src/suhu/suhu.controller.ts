import { Controller, Get, Query } from '@nestjs/common';
import { SuhuService } from './suhu.service.js';
import { KonversiSuhuDto } from './dto/konversi-suhu.dto.js';

@Controller('suhu')
export class SuhuController {
  constructor(private readonly service: SuhuService) {}

  @Get('konversi')
  konversi(@Query() query: KonversiSuhuDto) {
    return this.service.konversi(query);
  }
}
