import {App} from './App'
import {Task} from './Task'

export interface IButtonRender {
  (app: App, task: Task): void
}
