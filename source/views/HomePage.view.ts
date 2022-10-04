import {Div, Input, Reaction, RxDiv, RxInput, RxUL, TextArea} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'
import {Task} from '../models/Task'
import {NewTaskLineView} from './NewTaskLine.view'
import {TaskLineView} from './TaskLine.View'
import {TaskListView} from './TaskList.View'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, e => {
      RxDiv('TaskLists', null, e => {
        e.className = style.class.TaskLists
        TaskListView(app, app.taskList, false)
        if (app.completedTasks > 0) {
          Div('CompletedLable', e => {
            e.className = style.class.CompletedLabel
            e.textContent = 'Completed tasks:'
          })
          TaskListView(app, app.taskList, true)
        }
      })
      NewTaskLineView(app)
    })
  )
}
