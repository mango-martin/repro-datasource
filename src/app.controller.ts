import { Body, Controller, Post } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import { TestDto } from './test.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private _dataSource: DataSource,
  ) {
    console.warn(_dataSource);
  }

  @Post()
  getHello(@Body() _: TestDto): string {
    return this.appService.getHello();
  }
}
