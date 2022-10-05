import {Div, RxDiv} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'
import {NewTaskLineView} from './NewTaskLine.view'
import {TaskListView} from './TaskList.View'

export function HomePageView(app: App) {
  return (
    PageView(app.homePage, () => {
      RxDiv('TaskLists', null, e => {
        e.className = style.class.TaskLists
        TaskListView(app.reactiveTaskList, false)
        if (app.reactiveTaskList.completedTasks > 0) {
          Div('CompletedLabel', e => {
            e.className = style.class.CompletedLabel
            e.textContent = 'Completed tasks:'
          })
          TaskListView(app.reactiveTaskList, true)
        }
      })
      NewTaskLineView(app.reactiveTaskList)
    })
  )
}
