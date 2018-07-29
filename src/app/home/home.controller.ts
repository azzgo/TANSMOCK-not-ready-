import { Controller, Get, Render } from '@nestjs/common'

@Controller('ui-dashboard')
export class HomeController {
  @Get('/')
  @Render('home')
  uiView() {
    return
  }
}