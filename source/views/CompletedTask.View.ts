import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, RxDiv, RxLI} from 'reactronic-dom'
import {style} from './TaskLine.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function CompletedTaskLineView(app: App, task: Task){
  return(
    RxLI('TaskDiv' + task.id, null, e => {
      e.className = style.class.TaskLineDiv
      RxDiv('DivContent+' + task.id, null, e => {
        console.log('div')
        e.textContent = task.content
        e.className = style.class.DivContentCompleted
      })
      Div('Checked' + task.id, e => {
        e.className = style.class.CheckedDivCompleted
        e.onclick = () => {
          task.changeCompleted()
        }
      })
    })
  )
}
