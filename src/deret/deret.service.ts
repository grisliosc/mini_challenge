import { Injectable, BadRequestException } from '@nestjs/common';
import { GeneratorDeretDto } from './dto/generator-deret.dto.js';

@Injectable()
export class DeretService {
  buat(jenis: string, query: GeneratorDeretDto) {
    if (!['ganjil', 'genap', 'kuadrat'].includes(jenis)) {
      throw new BadRequestException('Jenis harus ganjil, genap, atau kuadrat');
    }
    const { jumlah, urutan } = query;
    const data: number[] = [];
    let total = 0;
    for (let i = 1; i <= jumlah; i++) {
      let nilai: number;
      if (jenis === 'ganjil') nilai = 2 * i - 1;
      else if (jenis === 'genap') nilai = 2 * i;
      else nilai = i * i;
      data.push(nilai);
      total += nilai;
    }
    if (urutan === 'desc') data.reverse();
    return { jenis, jumlah, data, total };
  }
}
