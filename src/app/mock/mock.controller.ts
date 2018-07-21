import { Controller, Get, Post, Body, Res, Delete, Param } from '@nestjs/common'
import { mockModel } from 'src/models/mock'
import { Response } from 'express'

@Controller()
export class MockController {

  @Get('/mock/list')
  mockList() {
    return mockModel.getMockList()
  }

  @Post('/mock')
  createNewMockURL(@Body('url') url: string, @Res() res: Response) {
    if (!url.startsWith('/')) {
      return res.status(400).json({
        message: 'Url should start with /',
      })
    }

    mockModel.saveOrNew(url)

    return res.status(201).json({
      status: 'ok',
      url,
    })

  }

  @Delete('/mock')
  deleteMockUrl(@Param('url') url: string, @Res() res: Response) {

  }

  @Post('/mock/url')
  saveOrNewMock(
    @Body('url') url: string,
    @Body('method') method: string,
    @Body('responseName') responseName: string,
    @Body('responseBody') responseBody: any,
  ) {
    return 'ok'
  }
}
