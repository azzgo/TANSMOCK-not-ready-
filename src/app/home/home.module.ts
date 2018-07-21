import { Module } from '@nestjs/common'
import { HomeController } from 'src/app/home/home.controller'

@Module({
  controllers: [HomeController],
})
export class HomeModule {}
