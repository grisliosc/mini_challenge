import { Injectable, BadRequestException } from '@nestjs/common';
import { HitungNilaiDto } from './dto/hitung-nilai.dto.js';

@Injectable()
export class NilaiService {
  hitungNilai(dto: HitungNilaiDto) {
    if (!dto.nama || dto.nama.trim() === '') {
      throw new BadRequestException('Nama tidak boleh kosong');
    }
    if (!dto.tugas || dto.tugas.length === 0) {
      throw new BadRequestException('Tugas tidak boleh kosong');
    }

    const rataTugas = dto.tugas.reduce((total, nilai) => total + nilai, 0) / dto.tugas.length;
    const nilaiAkhir = Math.round((rataTugas * 0.3 + dto.uts * 0.3 + dto.uas * 0.4) * 100) / 100;
    
    let predikat: string;
    if (nilaiAkhir >= 90) predikat = 'A';
    else if (nilaiAkhir >= 80) predikat = 'B';
    else if (nilaiAkhir >= 70) predikat = 'C';
    else predikat = 'D';

    return { 
      nama: dto.nama.trim(), 
      rataTugas, 
      nilaiAkhir, 
      predikat, 
      status: nilaiAkhir >= 75 ? 'Lulus' : 'Remedial' 
    };
  }
}