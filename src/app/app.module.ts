import { Module, MiddlewareConsumer } from '@nestjs/common'
import { HomeModule } from 'src/app/home/home.module'
import { MockModule } from 'src/app/mock/mock.module'
import { SharedModule } from 'src/shared/shared.module'
import { MockMiddleware } from 'src/middlewares/mock.middleware'

@Module({
  imports: [HomeModule, MockModule, SharedModule],
})
export class ApplicationModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(MockMiddleware)
    .forRoutes('*')
  }
}
