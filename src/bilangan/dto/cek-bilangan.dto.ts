import { Type } from 'class-transformer';
import { IsInt, Max, Min } from 'class-validator';

export class CekBilanganDto {
  @Type(() => Number)
  @IsInt({ message: 'Angka harus bilangan bulat' })
  @Min(1, { message: 'Angka minimal 1' })
  @Max(100, { message: 'Angka maksimal 100' })
  angka: number;
}
