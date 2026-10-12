import { Injectable } from '@nestjs/common';
import { GradeDto } from './dto/grade.dto.js';

@Injectable()
export class AcademicService {
    countGrade(dto: GradeDto) {
        const grade = dto.grade
        let result: string

        if (grade >= 90) {
            result = 'A'
        } else if (grade >= 80) {
            result = 'B'
        } else if (grade >= 70) {
            result = 'C'
        } else if (grade >= 60) {
            result = 'D'
        } else {
            result = 'E'
        }

        return{
            message: 'Grade telah dihitung', 
            result
        }
    }
}
