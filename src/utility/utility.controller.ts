import { Body, Controller, Post } from '@nestjs/common';
import { UtilityService } from './utility.service.js';
import { temperatureDto } from './dto/temperature.dto.js';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilityService: UtilityService) {}

  @Post('temperature')
  convertTemp(@Body() dto: temperatureDto) {
    return this.utilityService.convertTemp(dto)
  }
}
