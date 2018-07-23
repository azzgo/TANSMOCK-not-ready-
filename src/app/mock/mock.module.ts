import { Module } from '@nestjs/common'
import { MockController } from 'src/app/mock/mock.controller'
import { MockService } from 'src/shared/mock.service'

@Module({
  controllers: [MockController],
  providers: [MockService],
})
export class MockModule {}
