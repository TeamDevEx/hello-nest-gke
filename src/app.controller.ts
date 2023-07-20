import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiQuery, ApiOkResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({
    summary:
      'Print Hello World!'
  })
  @ApiOkResponse({
    isArray: false,
    description: 'Print Hello World!'
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
