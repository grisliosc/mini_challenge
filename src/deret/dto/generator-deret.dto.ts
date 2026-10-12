import { Transform } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';

export class GeneratorDeretDto {
  @IsIn(['ganjil', 'genap', 'kuadrat'], { message: 'Jenis harus ganjil, genap, atau kuadrat' })
  jenis: string;

  @Transform(({ value }) => value === undefined || value === '' ? NaN : Number(value))
  @IsInt({ message: 'Jumlah harus bilangan bulat' })
  @Min(1, { message: 'Jumlah minimal 1' })
  @Max(20, { message: 'Jumlah maksimal 20' })
  jumlah: number;

  @IsOptional()
  @IsIn(['asc', 'desc'], { message: 'Urutan harus asc atau desc' })
  urutan?: string;
}
