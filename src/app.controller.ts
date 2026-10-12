import { Controller, Get, Post, Body, Param, Query, HttpCode, } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}