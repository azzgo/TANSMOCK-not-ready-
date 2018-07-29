import { NestMiddleware, Injectable, MiddlewareFunction } from '@nestjs/common'
import { Request, Response, NextFunction } from 'express'
import { MockService } from 'src/shared/mock.service'
import { get } from 'lodash'

@Injectable()
export class MockMiddleware implements NestMiddleware {
  constructor(private mockService: MockService) {}


  resolve(): MiddlewareFunction {
    return (req: Request, res: Response, next: NextFunction) => {
      const mockModel = this.getMockResponse(req)
      const method = req.method.toLowerCase()
      if (mockModel) {
        if (mockModel.enableNonRestFul) {
          const activeResponseName = get(mockModel, `mock.${method}.activeResponse`)
          const activeResponse = get(mockModel, `mock.${method}.responseEnum.${activeResponseName}`)
          return res.set(activeResponse.headers).status(activeResponse.status).end(activeResponse.response)
        }

        const activeResponseName = get(mockModel, `mock.${method}.activeResponse`)
        const activeResponse = get(mockModel, `mock.${method}.responseEnum.${activeResponseName}`)

        return res.set(activeResponse.headers).status(activeResponse.status).end(activeResponse.response)
      }

      next()
    }
  }

  getMockResponse(request: Request) {
    return this.mockService.findSecificPathMock(request.originalUrl)
  }
}