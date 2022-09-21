import {Div, Input, Reaction, RxDiv, RxInput, RxUL, TextArea} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'
import {Task} from '../models/Task'
import {NewTaskLineView} from './NewTaskLine.view'
import {TaskLineView} from './TaskLine.View'

export  function HomePageView(app : App, task : Task) {
  return (
    PageView(app.homePage, e => {
      /*RxDiv('Task', null, e=> {
        e.id = 'Task'
        e.className = style.class.Task
        Reaction('ChangeHandler', null, () =>{
          e.textContent = task.content
        })
      })*/
      RxUL('TaskList',null, e => {
        e.id = 'TaskList'
        e.className = style.class.TaskList
        let index: number = 0
        app.taskList.forEach((element) => {
          if(!element.isCompleted) {
            TaskLineView(app, element, index.toString())
            index++
          }
        })
        if(app.completedTasks > 0){
          Div('CompletedLable', e => {
            e.className = style.class.CompletedLabel
            e.textContent = 'Completed tasks:'
          })
        }
        app.taskList.forEach((element) =>{
          if(element.isCompleted) {
            TaskLineView(app, element, index.toString())
            index++
          }
        })
      })
      NewTaskLineView(app, task)
    })
  )
}
