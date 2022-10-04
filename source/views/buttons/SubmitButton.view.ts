import {IButtonRender} from '../../models/IButtonRender'
import {App} from '../../models/App'
import {Task} from '../../models/Task'
import {Div, I, RxDiv} from 'reactronic-dom'
import {style} from './Buttons.css'
import {Rx} from 'reactronic'

export const SubmitButtonView: IButtonRender = function (app: App, task: Task) {
  return (
    RxDiv('Submit' + task.id, null, e => {
      e.className = task.isCompleted ? style.class.CheckBtnChecked : style.class.CheckBtn
      e.style.borderRadius = '0 10px 10px 0'
      e.style.fontSize = '30px'
      e.id = 'Submit' + task.id
      e.onclick = () => {
        app.submitTaskChange(task)
      }
      I('SubmitIcon' + task.id, e => {
        e.className = 'fa-solid fa-spell-check'
      })
    })
  )
}
