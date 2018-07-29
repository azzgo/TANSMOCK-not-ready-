import lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import { Injectable } from '@nestjs/common'
import pathMath from 'path-match'
import { ConfigService, IMockOptions } from 'src/shared/config.service'

const route = pathMath({
  sensitive: false,
  strict: false,
  end: false,
})

export interface IMockModel {
  [path: string]: {
    mock: {
      [method: string]: {
        activeResponse: string,
        description: string,
        responseEnum: {
          [responseName: string]: {
            status: number,
            headers: {
              [key: string]: string,
            }
            response: string,
          },
        },
      },
    },
    enableNonRestFul: boolean,
  }
}

@Injectable()
export class MockService {
  private db: lowdb.LowdbSync<IMockModel[]>
  config: IMockOptions

  constructor(private configService: ConfigService) {}

  init() {
    this.config = this.configService.getConfig()
    const fileAdapter = new FileSync(this.config.database.path)
    this.db = lowdb(fileAdapter)
    this.db.defaults([]).write()
  }

  getMockList() {
    return this.db.getState()
  }

  saveOrNewPathModel(path: string) {
    this.db.set(path, {
      mock: {},
      enableNonRestFul: false,
    } as IMockModel['path']).write()
  }

  deletePathModel(path: string) {
    this.db.unset(path)
  }

  saveOrNewMethodMock(
    path: string,
    method: string,
    description: string,
    responseName: string,
    status: number = 200,
    headers: {[key: string]: string} = {'content-type': 'application/json'},
    responseBody: string = '{}',
  ) {
    this.db.set(`${path}.mock.${method}`, {
      activeResponse: responseName,
      description,
      responseEnum: {
        [responseName]: {
          status,
          headers,
          response: responseBody,
        },
      },
    } as IMockModel['path']['mock']['method']).write()
  }

  updateActiveResponse(path: string, method: string, activieResponseName: string) {
    this.db.set(`${path}.mock.${method}.activeResponse`, activieResponseName).write()
  }

  deleteMethodMockModel(path: string, method: string) {
    this.db.unset(`${path}.mock.${method}`).write()
  }

  deleteResponseNameMockModel(path: string, method: string, responseName: string) {
    this.db.unset(`${path}.mock.${method}.responseEnum.${responseName}`).write()
  }

  findSecificPathMock(routePath: string) {
    const matchPath = this.db.keys().find(key => {
      const match = route(this.config.server.prefix + key)(routePath)
      if (match) {
        return true
      }
    }).value()

    if (matchPath) {
      return this.db.get(matchPath).value()
    }
  }
}
