import {Task} from './Task'
import {ReactiveTaskList} from './TaskList'

export interface IButtonRender {
  (taskList: ReactiveTaskList, task: Task): void
}
