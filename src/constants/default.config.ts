import path from 'path'
import { IMockOptions } from 'src/shared/config.service'

const defaultOptions: IMockOptions = {
  database: {
    engine: 'lowdb',
    path: path.join(process.cwd(), 'mock.db'),
  },
  server: {
    prefix: '/rest/v1',
    port: 3001,
  },
}

export default defaultOptions
