import { Transform } from 'class-transformer';
import { IsIn, IsNumber, IsString, ValidateIf, Min } from 'class-validator';

const satuan = ['celsius', 'fahrenheit', 'kelvin'];
export class KonversiSuhuDto {
  @Transform(({ value }) => value === undefined || value === '' ? NaN : Number(value))
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Nilai harus berupa angka' })
  nilai: number;

  @Transform(({ value }) => typeof value === 'string' ? value.toLowerCase() : value)
  @IsString({ message: 'Satuan asal wajib diisi' })
  @IsIn(satuan, { message: 'Satuan dari harus celsius, fahrenheit, atau kelvin' })
  dari: string;

  @Transform(({ value }) => typeof value === 'string' ? value.toLowerCase() : value)
  @IsString({ message: 'Satuan tujuan wajib diisi' })
  @IsIn(satuan, { message: 'Satuan ke harus celsius, fahrenheit, atau kelvin' })
  ke: string;
}
function IsNotEquals(arg0: string): (target: KonversiSuhuDto, propertyKey: "ke") => void {
  throw new Error('Function not implemented.');
}

