import {App} from './App'
import {IButtonRender} from './IButtonRender'
import {Task} from './Task'

export class ButtonRenderer {
  private readonly app: App
  private buttons: IButtonRender[]
  task: Task

  enterHandler: Function = (event: KeyboardEvent): void => {
    if (event.code == 'Enter') {
      event.preventDefault()
      this.app.submitTaskChange(this.task)
    }
  }

  dblclickHandler: Function = (): void => {
    this.app.submitTaskChange(this.task)
  }

  onInputHandler: Function = (text: string): void => {
    this.app.changeTask(this.task, text)
  }


  constructor(app: App, task: Task, buttons: IButtonRender[]) {
    this.app = app
    this.task = task
    this.buttons = buttons
  }

  addButton(button: IButtonRender): void {
    this.buttons.push(button)
  }

  render(): void {
    this.buttons.forEach((button) => {
      button(this.app, this.task)
    })
  }
}
