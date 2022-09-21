import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, HtmlSensors, Img, RxLI} from 'reactronic-dom'
import {style} from './TaskLine.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskLineView(app : App, task : Task, id: string){
  return(
    RxLI('TaskDiv' + id, null, e => {
      e.className = style.class.TaskLineDiv
      Div('DivContent+' + id, e => {
        e.textContent = task.content
        e.className = style.class.DivContent
      })
      Div('Checked' + id, e => {
        e.className = style.class.CheckedDiv
        e.onclick = () => task.changeCompleted()
      })
    })
  )
}
