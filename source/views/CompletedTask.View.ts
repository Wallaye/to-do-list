import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, I, RxDiv, RxLI} from 'reactronic-dom'
import {style} from './CompletedTask.css'

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
        e.className = style.class.CheckBtn
        e.onclick = () => {
          task.changeCompleted()
        }
        I('CheckIcon' + task.id, e => {
          e.className = 'fa-solid fa-rotate-left'
        })
      })
      Div('TrashBtn' + task.id, e => {
        e.className = style.class.TrashBtn
        I('TrashIcon' + task.id, e =>{
          e.className = 'fa-solid fa-trash'
        })
      })
    })
  )
}
