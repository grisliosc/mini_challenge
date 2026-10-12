import { Injectable } from '@nestjs/common';
import { convertMeterDto } from './dto/convert-meters.dto.js';

@Injectable()
export class ConvertService {
  convertMeters(params: convertMeterDto) {
    // Implementation for converting meters
    const kilometer = params.meters / 1000;
    const centimeter = params.meters * 100;
    
    return {
      success: true,
      message: 'Meters converted successfully',
      data: {
        meters: params.meters,
        kilometer,
        centimeter,
      },
    };
  }

  

}