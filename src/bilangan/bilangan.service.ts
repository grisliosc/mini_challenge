import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class BilanganService {
  cek(angka: number) {
    if (!Number.isInteger(angka) || angka < 1 || angka > 100) {
      throw new BadRequestException('Angka harus bilangan bulat antara 1 sampai 100');
    }
    return {
      angka,
      jenis: angka % 2 === 0 ? 'genap' : 'ganjil',
      kuadrat: angka * angka,
      kelipatanLima: angka % 5 === 0,
    };
  }
}
