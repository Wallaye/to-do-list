import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, HtmlSensors, I, Input, RxInput} from 'reactronic-dom'
import {style} from './NewTaskLine.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function NewTaskLineView(app: App, newTask : Task){
  return(
    Div('Input', e => {
      let input: HTMLInputElement
      e.className = style.class.InputDiv
      e.id = 'InputDiv'
      Input('Text',e => {
        input = e
        e.type = 'text'
        e.className = style.class.InputArea
        e.placeholder = 'Enter the text...'
        input.onchange = () => {
          newTask.setContent(e.value)
        }
        input.dataForSensor.keyboard = () => {
          newTask.setContent(e.value)
        }
      })
      Div('AddButton', e => {
        const button : HTMLDivElement = e
        e.className = style.class.AddButton
        button.onclick = () => {
          if (input.value.trim() != '')
          {
            app.addTask(input.value)
            input.value = ''
          }
        }
        I('AddIcon', e => {
          e.className = 'fa-solid fa-plus'
        })
      })
    })
  )
}
