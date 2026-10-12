import { Injectable } from '@nestjs/common';
import { DiscountDto } from './dto/discount.dto.js';

@Injectable()
export class ShopService {
    countDiscount(dto: DiscountDto) {
        const harga = dto.harga
        const discount = dto.diskon
        const finalPrice = (100 - discount) * harga / 100
        return{
            message: 'Harga akhir telah dihitung', 
            finalPrice
        }
    }
}
