import {App} from '../../models/App'
import {Task} from '../../models/Task'
import {Div, I} from 'reactronic-dom'
import {style} from './Buttons.css'
import {IButtonRender} from '../../models/IButtonRender'

export const UncheckButtonView: IButtonRender = function (app : App, task : Task) {
  return(
    Div('Checked' + task.id, e => {
      e.className = task.isCompleted ? style.class.CheckBtnChecked : style.class.CheckBtn
      e.onclick = () => {
        task.changeCompleted()
      }
      I('CheckIcon' + task.id, e => {
        e.className = 'fa-solid fa-rotate-left'
      })
    })
  )
}
