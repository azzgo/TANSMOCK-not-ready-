import { NestFactory } from '@nestjs/core'
import { ApplicationModule } from './app/app.module'
import { configUtil, IMockOptions } from 'src/configs/config'


export async function startServer (options?: IMockOptions, callback?: () => void) {
  configUtil.setConfig(options)

  const app = await NestFactory.create(ApplicationModule)

  const config = configUtil.getConfig()

  app.listen(config.server.port, () => {
    callback && callback()
  })

  return app
}
