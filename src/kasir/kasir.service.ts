import { Injectable } from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto.js';

@Injectable()
export class KasirService {
  checkout(member: string, metode: string, body: CheckoutDto) {
    const diskonMember = { reguler: 0, silver: 5, gold: 10 };
    let subtotal = 0;
    let totalItem = 0;

    const rincian = body.items.map((item) => {
      const subtotalItem = item.harga * item.qty;
      subtotal += subtotalItem;
      totalItem += item.qty;
      return {
        nama: item.nama,
        harga: item.harga,
        qty: item.qty,
        subtotal: subtotalItem,
      };
    });

    const diskon = (subtotal * diskonMember[member as keyof typeof diskonMember]) / 100;
    const setelahDiskon = subtotal - diskon;
    const biayaAdmin = metode === 'qris' ? setelahDiskon * 0.01 : 0;
    const total = setelahDiskon + biayaAdmin;

    return {
      member,
      metode,
      rincian,
      totalItem,
      subtotal,
      diskon,
      biayaAdmin,
      total,
    };
  }
}