import { Controller, Post, Body } from '@nestjs/common';
import { NilaiService } from './nilai.service.js';
import { HitungNilaiDto } from './dto/hitung-nilai.dto.js';

@Controller('nilai')
export class NilaiController {
  constructor(private readonly nilaiService: NilaiService) {}

  @Post('hitung')
  hitungNilaiRapor(@Body() dto: HitungNilaiDto) {
    return this.nilaiService.hitungNilai(dto);
  }
}