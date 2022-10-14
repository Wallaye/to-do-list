import {ObservableObject, unobservable} from 'reactronic'

export class Page extends ObservableObject {
  @unobservable readonly pagePath: string
  content: string
  isActive: boolean

  constructor(pathBase: string) {
    super()
    this.pagePath = pathBase
    this.content = ''
    this.isActive = false
  }
}
