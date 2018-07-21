import defaultOptions from 'src/configs/default.config'

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

class Config {
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

export const configUtil = new Config()
