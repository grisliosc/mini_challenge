import { IsNotEmpty, IsNumber, IsPositive, Max, Min } from "class-validator";

export class GradeDto {
    @IsNotEmpty()
    @IsPositive()
    @IsNumber()
    @Min(0)
    @Max(100)
    grade: number;
}