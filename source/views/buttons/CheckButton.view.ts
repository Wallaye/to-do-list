import {Div, I} from 'reactronic-dom'
import {style} from './Buttons.css'
import {Task} from '../../models/Task'
import {IButtonRender} from '../../models/IButtonRender'
import {ReactiveTaskList} from '../../models/TaskList'

export const CheckButtonView: IButtonRender = function (taskList: ReactiveTaskList, task : Task) {
  return(
    Div('Checked' + task.id, e => {
      e.className = task.isCompleted ? style.class.CheckBtnChecked : style.class.CheckBtn
      e.id = 'Checked' + task.id
      e.onclick = () => {
        task.changeCompleted()
      }
      I('CheckIcon' + task.id, e => {
        e.className = 'fa-solid fa-check'
      })
    })
  )
}
