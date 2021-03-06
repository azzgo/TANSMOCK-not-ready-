import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import { IMockOptions, ConfigService } from 'src/shared/config.service'
import { MockService } from 'src/shared/mock.service'
import { resolve } from 'path'


export async function startServer (options?: IMockOptions, callback?: () => void) {
  const app = await NestFactory.create(ApplicationModule)
  app.useStaticAssets(resolve(__dirname, '../public'))
  app.setBaseViewsDir(resolve(__dirname, '../views'))
  app.setViewEngine('ejs')

  const configService = app.get(ConfigService)
  configService.setConfig(options)
  app.get(MockService).init()

  const config = configService.getConfig()

  await app.listen(config.server.port, () => {
    callback && callback()
  })

  return app
}
