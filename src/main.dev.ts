import { startServer } from './main'
import os from 'os'

startServer({
  database: {
    engine: 'lowdb',
    path: os.tmpdir() + '/mock.db',
  },
})
