import { Module } from '@nestjs/common'
import { HomeModule } from 'src/app/home/home.module'
import { MockModule } from 'src/app/mock/mock.module'

@Module({
  imports: [HomeModule, MockModule],
  controllers: [],
})
export class ApplicationModule {}