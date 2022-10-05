import {Div, I, Input} from 'reactronic-dom'
import {style} from './NewTaskLine.css'
import {ReactiveTaskList} from '../models/TaskList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function NewTaskLineView(taskList: ReactiveTaskList){
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
        e.onkeydown = (event) => {
          if (event.code == 'Enter'){
            event.preventDefault()
            if (input.value.trim() != ''){
              taskList.addTask(input.value)
            }
            input.value = ''
          }
        }
      })
      Div('AddButton', e => {
        e.className = style.class.AddButton
        e.onclick = () => {
          if (input.value.trim() != ''){
            taskList.addTask(input.value)
          }
          input.value = ''
        }
        I('AddIcon', e => {
          e.className = 'fa-solid fa-plus'
        })
      })
    })
  )
}
