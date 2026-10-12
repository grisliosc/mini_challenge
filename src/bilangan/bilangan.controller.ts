import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BilanganService } from './bilangan.service.js';

@Controller('bilangan')
export class BilanganController {
  constructor(private readonly service: BilanganService) {}

  @Get(':angka')
  cek(@Param('angka', ParseIntPipe) angka: number) {
    return this.service.cek(angka);
  }
}
