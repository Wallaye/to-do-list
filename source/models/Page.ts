import {isnonreactive, ReactiveObject} from 'reactronic'

export class Page extends ReactiveObject {
  @isnonreactive readonly pagePath: string
  content: string
  isActive: boolean

  constructor(pathBase: string) {
    super()
    this.pagePath = pathBase
    this.content = ''
    this.isActive = false
  }
}
