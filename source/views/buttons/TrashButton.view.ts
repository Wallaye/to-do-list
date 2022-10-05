import {Task} from '../../models/Task'
import {Div, I} from 'reactronic-dom'
import {style} from './Buttons.css'
import {IButtonRender} from '../../models/IButtonRender'
import {ReactiveTaskList} from '../../models/TaskList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const TrashButtonView: IButtonRender = function (taskList:ReactiveTaskList, task : Task) {
  return(
    Div('TrashButton' + task.id, e=> {
      e.className = task.isCompleted ? style.class.TrashBtnChecked : style.class.TrashBtn
      e.id = 'TrashBtn' + task.id
      e.onclick = () =>  taskList.deleteTask(task)
      I('TrashIcon' + task.id, e => {
        e.className = 'fa-solid fa-trash'
      })
    })
  )
}
