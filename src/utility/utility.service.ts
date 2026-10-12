import { Injectable } from '@nestjs/common';
import { temperatureDto } from './dto/temperature.dto.js';

@Injectable()
export class UtilityService {
    convertTemp(dto: temperatureDto) {
        const suhu = dto.value
        const from = dto.from
        const to = dto.to

        let convertedTemp: number;

        if (from === 'CELSIUS' && to === 'FAHRENHEIT') {
            convertedTemp = (suhu * 9/5) + 32;
        } else if (from === 'FAHRENHEIT' && to === 'CELSIUS') {
            convertedTemp = (suhu - 32) * 5/9;
        } else {
            return { message: 'Konversi suhu tidak valid' };
        }

        return {
            message: 'Konversi suhu berhasil',
            convertedTemp
        }
    }
}
