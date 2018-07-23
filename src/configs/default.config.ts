import path from 'path'
import { IMockOptions } from 'src/configs/config'

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
