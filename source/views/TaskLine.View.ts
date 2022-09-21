import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, HtmlSensors, I, Img, Reaction, RxDiv, RxLI} from 'reactronic-dom'
import {style} from './TaskLine.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskLineView(app: App, task: Task){
  return(
    RxLI('TaskDiv' + task.id, null, e => {
      e.className = style.class.TaskLineDiv
      RxDiv('DivContent+' + task.id, null, e => {
        e.textContent = task.content
        e.className = style.class.DivContent
      })
      Div('Checked' + task.id, e => {
        e.className = style.class.CheckBtn
        e.id = 'Checked' + task.id
        e.onclick = () => {
          task.changeCompleted()
        }
        I('CheckIcon' + task.id, e => {
          e.className = 'fa-solid fa-check'
        })
      })
      Div('TrashButton' + task.id, e=> {
        e.className = style.class.TrashBtn
        e.id = 'TrashBtn' + task.id
        I('TrashIcon' + task.id, e => {
          e.className = 'fa-solid fa-trash'
        })
      })
    })
  )
}
