import { Module, Global } from '@nestjs/common'
import { MockService } from 'src/shared/mock.service'
import { ConfigService } from 'src/shared/config.service'

@Global()
@Module({
  providers: [MockService, ConfigService],
  exports: [MockService, ConfigService],
})
export class SharedModule {}
