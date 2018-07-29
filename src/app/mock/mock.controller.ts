import { Controller, Get, Post, Body, Res, Delete, Param, Put, UseInterceptors } from '@nestjs/common'
import { MockService } from 'src/shared/mock.service'

@Controller()
export class MockController {

  constructor(private mockModel: MockService) {}

  @Get('/mock/list')
  mockList() {
    return this.mockModel.getMockList()
  }

  @Post('/mock')
  createNewMockURL(@Body('path') path: string, @Res() res: any) {
    if (!path.startsWith('/')) {
      return res.status(400).json({
        message: 'Path should start with /',
      })
    }

    this.mockModel.saveOrNewPathModel(path)

    return res.status(201).json({
      status: 'ok',
      path,
    })

  }

  @Delete('/mock/:path')
  deleteMockUrl(@Param('path') path: string) {
    this.mockModel.deletePathModel(path)
    return 'ok'
  }

  @Post('/mock/:path')
  saveOrNewMock(
    @Param('path') path: string,
    @Body('method') method: string,
    @Body('description') description: string,
    @Body('responseName') responseName: string,
    @Body('status') status: number,
    @Body('headers') headers: {[key: string]: string},
    @Body('responseBody') responseBody: string,
  ) {
    this.mockModel.saveOrNewMethodMock(path, method, description, responseName, status, headers, responseBody)
    return 'ok'
  }

  @Put('/mock/:path/:method')
  updateActiveResponse(
    @Param('path') path: string,
    @Param('method') method: string,
    @Body('acitveResponseName') acitveResponseName: string,
  ) {
    this.mockModel.updateActiveResponse(path, method, acitveResponseName)
    return 'ok'
  }

  @Delete('/mock/:path/:method')
  deleteMethodMock(
    @Param('path') path: string,
    @Param('method') method: string,
  ) {

    this.mockModel.deleteMethodMockModel(path, method)
    return 'ok'
  }

  @Delete('/mock/:path/:method/:responseName')
  deleteResponseNameMock(
    @Param('path') path: string,
    @Param('method') method: string,
    @Param('responseName') responseName: string,
  ) {

    this.mockModel.deleteResponseNameMockModel(path, method, responseName)
    return 'ok'
  }
}
