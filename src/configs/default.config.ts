import path from 'path'
import { IMockOptions } from 'src/configs/config'


const defaultOptions: IMockOptions = {
  database: {
    engine: 'lowdb',
    path: path.join(__dirname, 'mock.db'),
  },
  server: {
    prefix: '/rest/v1',
    port: 3001,
  },
}

export default defaultOptions
