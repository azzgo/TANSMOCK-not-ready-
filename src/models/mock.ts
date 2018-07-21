import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { configUtil } from 'src/configs/config'

export interface IMockModel {
  key: string
  value: {
    mock: {
      // restful method here
      key: string,
      value: {
        activeResponse: string,
        responseEnum: {
          key: string,
          value: {
            status: number,
            contentType: 'application/json' | 'plain/text'
            response: string,
          },
        },
      },
    },
    enableNonRestFul: boolean,
  }
}

class MockModel {
  private db: lowdb.LowdbSync<IMockModel[]>
  constructor() {
    const config = configUtil.getConfig()
    this.db = lowdb(new FileSync(config.database.path))
    this.db.defaults([]).write()
  }

  getMockList() {
    return this.db.getState()
  }

  saveOrNew(url: string) {
    this.db.set(url, {
      mock: {
        get: {
          activeResponse: 'succuss',
          responseEnum: {
            succuss: {
              status: 200,
              contentType: 'application/json',
              response: '{}',
            },
          },
        },
      },
      enableNonRestFul: false,
    }).write()
  }
}

export const mockModel = new MockModel()
