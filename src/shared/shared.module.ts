import { Module } from '@nestjs/common'
import { MockService } from 'src/shared/mock.service'

@Module({
  providers: [MockService],
  exports: [MockService],
})
export class SharedModule {}
