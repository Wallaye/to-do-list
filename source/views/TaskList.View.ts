import {App} from '../models/App'
import {Div, RxUL} from 'reactronic-dom'
import {TaskLineView} from './TaskLine.view'
import {style} from './TaskList.css'
import {CompletedTaskLineView} from './CompletedTask.View'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskListView(app: App, completed: boolean) {
  const name: string = completed? 'CompletedTaskList' : 'TaskList'
  RxUL(name,null, e => {
    if(app.completedTasks > 0 && completed){
      Div('CompletedLable', e => {
        e.className = style.class.CompletedLabel
        e.textContent = 'Completed tasks:'
      })
    }
    e.className = style.class.TaskList
    e.id = name
    app.taskList.forEach((element) => {
      if(element.isCompleted == completed) {
        if (!completed)
          TaskLineView(app, element)
        else
          CompletedTaskLineView(app, element)
      }
    })
  })
}
