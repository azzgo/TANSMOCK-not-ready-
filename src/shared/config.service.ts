import defaultOptions from 'src/constants/default.config'
import { Injectable } from '@nestjs/common'

export interface IMockOptions {
  server?: {
    prefix: string,
    port: number,
  },
  database?: {
    engine: 'lowdb' | 'nedb',
    path: string,
  }
}

@Injectable()
export class ConfigService {
  private config = defaultOptions

  getConfig() {
    return this.config
  }

  setConfig(options: IMockOptions) {
    this.config = {
      ...defaultOptions,
      ...options,
    }
  }
}

