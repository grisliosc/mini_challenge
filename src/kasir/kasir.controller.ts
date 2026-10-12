import { Controller, Post, Body, Query } from '@nestjs/common';
import { KasirService } from './kasir.service.js';
import { CheckoutDto } from './dto/checkout.dto.js';

@Controller('kasir')
export class KasirController {
  constructor(private readonly kasirService: KasirService) {}

  @Post('checkout')
  checkout(
    @Query('member') member: string,
    @Query('metode') metode: string,
    @Body() body: CheckoutDto, // <-- PAS TIKAN ADA @Body() DI SINI
  ) {
    return this.kasirService.checkout(member, metode, body);
  }
}