import {IButtonRender} from './IButtonRender'
import {Task} from './Task'
import {ReactiveTaskList} from './TaskList'

export class ButtonRenderer {
  private readonly taskList: ReactiveTaskList
  private buttons: IButtonRender[]
  task: Task

  enterHandler: Function = (event: KeyboardEvent): void => {
    if (event.code == 'Enter') {
      event.preventDefault()
      this.taskList.submitTaskChange(this.task)
    }
  }

  dblclickHandler: Function = (): void => {
    this.taskList.beginEdit(this.task)
  }

  onInputHandler: Function = (text: string): void => {
    this.taskList.changeTask(this.task, text)
  }


  constructor(taskList : ReactiveTaskList, task: Task, buttons: IButtonRender[]) {
    this.taskList = taskList
    this.task = task
    this.buttons = buttons
  }

  addButton(button: IButtonRender): void {
    this.buttons.push(button)
  }

  render(): void {
    this.buttons.forEach((button) => {
      button(this.taskList, this.task)
    })
  }
}
