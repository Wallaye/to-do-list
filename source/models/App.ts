import {ReactiveObject, isnonreactive} from 'reactronic'
import {Page} from './Page'
import {ReactiveTaskList} from './TaskList'

export class App extends ReactiveObject {
  @isnonreactive readonly version: string
  @isnonreactive readonly homePage: Page
  @isnonreactive reactiveTaskList : ReactiveTaskList

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home')
    this.reactiveTaskList = new ReactiveTaskList()
  }
}
