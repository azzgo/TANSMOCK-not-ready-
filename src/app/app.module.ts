import { Module } from '@nestjs/common'
import { HomeModule } from 'src/app/home/home.module'
import { MockModule } from 'src/app/mock/mock.module'
import { SharedModule } from 'src/shared/shared.module'

@Module({
  imports: [HomeModule, MockModule, SharedModule],
})
export class ApplicationModule {}
