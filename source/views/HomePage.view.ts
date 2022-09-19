import {Div, Input, Reaction, RxDiv, RxInput, TextArea} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'
import {Task} from '../models/Task'

export  function HomePageView(app : App, task : Task) {
  return (
    PageView(app.homePage, e => {
      RxDiv('Task', null, e=> {
        e.id = 'Task'
        e.className = style.class.Task
        Reaction('ChangeHandler', null, () =>{
          e.textContent = task.content
          console.log(task.content)
        })
      })
      Div('Input', e => {
        let input: HTMLInputElement
        e.className = style.class.InputDiv
        e.id = 'InputDiv'
        RxInput('Text',null, e => {
          input = e
          e.type = 'text'
          e.className = style.class.InputArea
          e.placeholder = 'Enter the text'
          e.onchange = () => task.setContent(e.value)
        })
      })
    })
  )
}
