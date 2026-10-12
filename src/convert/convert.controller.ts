import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { get } from 'http';
import { convertMeterDto } from './dto/convert-meters.dto.js';

@Controller('convert')
export class ConvertController {
  constructor(private readonly convertService: ConvertService) {}

  @Get("/length/:meters")
  convertMeters(@Param('meters') params: convertMeterDto) {
    return this.convertService.convertMeters(params);
  }

  
}
