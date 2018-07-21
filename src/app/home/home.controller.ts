import { Controller, Get } from '@nestjs/common'

@Controller('ui-dashboard')
export class HomeController {
  @Get('/')
  uiView() {
    return 'home page'
  }
}