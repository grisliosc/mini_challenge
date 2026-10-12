import { Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsNumber, IsString, Max, Min, ValidateNested } from 'class-validator';

export class HitungNilaiDto {
  @IsString({ message: 'Nama harus berupa teks' })
  nama: string;

  @IsArray({ message: 'Tugas harus berupa array' })
  @ArrayMinSize(1, { message: 'Tugas harus berisi minimal 1 angka' })
  @IsNumber({}, { each: true, message: 'Setiap nilai tugas harus berupa angka' })
  @Min(0, { each: true, message: 'Nilai tugas minimal 0' })
  @Max(100, { each: true, message: 'Nilai tugas maksimal 100' })
  tugas: number[];

  @Type(() => Number)
  @IsNumber({}, { message: 'UTS harus berupa angka' })
  @Min(0, { message: 'UTS minimal 0' })
  @Max(100, { message: 'UTS maksimal 100' })
  uts: number;

  @Type(() => Number)
  @IsNumber({}, { message: 'UAS harus berupa angka' })
  @Min(0, { message: 'UAS minimal 0' })
  @Max(100, { message: 'UAS maksimal 100' })
  uas: number;
}
