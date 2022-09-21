import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, HtmlSensors, Img, RxLI} from 'reactronic-dom'
import {style} from './TaskLine.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskLineView(app: App, task: Task){
  return(
    RxLI('TaskDiv' + task.id, null, e => {
      e.className = style.class.TaskLineDiv
      Div('DivContent+' + task.id, e => {
        e.textContent = task.content
        e.className = style.class.DivContent
      })
      Div('Checked' + task.id, e => {
        e.className = style.class.CheckedDiv
        e.onclick = () => {
          task.changeCompleted()
        }
      })
    })
  )
}
