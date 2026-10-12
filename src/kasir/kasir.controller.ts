import { Controller, Post, Body, Param, Query, BadRequestException } from '@nestjs/common';
import { KasirService } from './kasir.service.js';
import { CheckoutDto } from './dto/checkout.dto.js';

@Controller('kasir')
export class KasirController {
  constructor(private readonly kasirService: KasirService) {}

  @Post('checkout/:member')
  checkout(
    @Param('member') member: string,
    @Query('metode') metode: string,
    @Body() body: CheckoutDto,
  ) {
    // Validasi member di params
    if (!member) {
      throw new BadRequestException('Member wajib diisi di URL');
    }
    const normalizedMember = member.toLowerCase();
    if (!['reguler', 'silver', 'gold'].includes(normalizedMember)) {
      throw new BadRequestException('Member harus reguler, silver, atau gold');
    }

    // Validasi metode di query
    if (!metode) {
      throw new BadRequestException('Metode pembayaran wajib diisi di query (?metode=...)');
    }
    const normalizedMetode = metode.toLowerCase();
    if (!['tunai', 'qris'].includes(normalizedMetode)) {
      throw new BadRequestException('Metode harus tunai atau qris');
    }

    return this.kasirService.checkout(normalizedMember, normalizedMetode, body);
  }
}