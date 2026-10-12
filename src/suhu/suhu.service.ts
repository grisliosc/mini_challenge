import { Injectable, BadRequestException } from '@nestjs/common';
import { KonversiSuhuDto } from './dto/konversi-suhu.dto.js';

@Injectable()
export class SuhuService {
  konversi(query: KonversiSuhuDto) {
    const { nilai, dari, ke } = query;
    if (dari === ke) throw new BadRequestException('Satuan asal dan tujuan tidak boleh sama');
    if (dari === 'kelvin' && nilai < 0) throw new BadRequestException('Nilai Kelvin tidak boleh kurang dari 0');

    let celsius: number;
    if (dari === 'celsius') celsius = nilai;
    else if (dari === 'fahrenheit') celsius = (nilai - 32) * 5 / 9;
    else celsius = nilai - 273.15;

    let hasil: number;
    if (ke === 'celsius') hasil = celsius;
    else if (ke === 'fahrenheit') hasil = celsius * 9 / 5 + 32;
    else hasil = celsius + 273.15;

    hasil = Math.round((hasil + Number.EPSILON) * 100) / 100;
    return { nilaiAsal: nilai, satuanAsal: dari, hasil, satuanHasil: ke };
  }
}
