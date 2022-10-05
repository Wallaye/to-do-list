import {IButtonRender} from '../../models/IButtonRender'
import {Task} from '../../models/Task'
import {I, RxDiv} from 'reactronic-dom'
import {style} from './Buttons.css'
import {ReactiveTaskList} from '../../models/TaskList'

export const SubmitButtonView: IButtonRender = function (taskList:ReactiveTaskList, task: Task) {
  return (
    RxDiv('Submit' + task.id, null, e => {
      e.className = task.isCompleted ? style.class.CheckBtnChecked : style.class.CheckBtn
      e.style.borderRadius = '0 10px 10px 0'
      e.style.fontSize = '30px'
      e.id = 'Submit' + task.id
      e.onclick = () => {
        taskList.submitTaskChange(task)
      }
      I('SubmitIcon' + task.id, e => {
        e.className = 'fa-solid fa-spell-check'
      })
    })
  )
}
