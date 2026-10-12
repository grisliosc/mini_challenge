import { IsEnum, IsNumber } from "class-validator";

export enum TempUnit { CELSIUS = 'CELSIUS', FAHRENHEIT = 'FAHRENHEIT' }

export class temperatureDto{
    @IsNumber()
  value: number;

  @IsEnum(TempUnit)
  from: TempUnit;

  @IsEnum(TempUnit)
  to: TempUnit;
}