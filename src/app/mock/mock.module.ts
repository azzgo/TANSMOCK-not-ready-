import { Module } from '@nestjs/common'
import { MockController } from 'src/app/mock/mock.controller'

@Module({
  controllers: [MockController],
  providers: [],
})
export class MockModule {}
