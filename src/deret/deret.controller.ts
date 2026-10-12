import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';
import { DeretService } from './deret.service.js';
import { GeneratorDeretDto } from './dto/generator-deret.dto.js';

@Controller('deret')
export class DeretController {
  constructor(private readonly service: DeretService) {}

  @Get(':jenis')
  buat(@Param('jenis') jenis: string, @Query() query: GeneratorDeretDto) {
    return this.service.buat(jenis, query);
  }
}
