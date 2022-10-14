import {ObservableObject,unobservable} from 'reactronic'
import {Page} from './Page'
import {ReactiveTaskList} from './TaskList'

export class App extends ObservableObject {
  @unobservable readonly version: string
  @unobservable readonly homePage: Page
  @unobservable reactiveTaskList : ReactiveTaskList

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home')
    this.reactiveTaskList = new ReactiveTaskList()
  }
}
