import { Transform, Type } from 'class-transformer';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsInt, IsNumber, IsString, Min, ValidateNested } from 'class-validator';

export class ItemCheckoutDto {
  @IsString({ message: 'Nama item harus berupa teks' })
  @Transform(({ value }) => typeof value === 'string' ? value.trim() : value)
  nama: string;

  @Type(() => Number)
  @IsNumber({ allowNaN: false, allowInfinity: false }, { message: 'Harga harus berupa angka' })
  @Min(0.01, { message: 'Harga harus lebih dari 0' })
  harga: number;

  @Type(() => Number)
  @IsInt({ message: 'Qty harus bilangan bulat' })
  @Min(1, { message: 'Qty harus bilangan bulat lebih dari 0' })
  qty: number;
}

export class CheckoutDto {
  @IsArray({ message: 'Items harus berupa array' })
  @ArrayMinSize(1, { message: 'Items minimal berisi 1 item' })
  @ArrayMaxSize(10, { message: 'Items maksimal berisi 10 item' })
  @ValidateNested({ each: true })
  @Type(() => ItemCheckoutDto)
  items: ItemCheckoutDto[];
}