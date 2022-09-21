import {Div, Input, Reaction, RxDiv, RxInput, RxUL, TextArea} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'
import {Task} from '../models/Task'
import {NewTaskLineView} from './NewTaskLine.view'
import {TaskLineView} from './TaskLine.View'
import {TaskListView} from './TaskList.View'

export  function HomePageView(app : App, task : Task) {
  return (
    PageView(app.homePage, e => {
      TaskListView(app, false)
      TaskListView(app, true)
      NewTaskLineView(app, task)
    })
  )
}
