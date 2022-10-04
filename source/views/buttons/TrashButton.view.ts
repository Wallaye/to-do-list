import {App} from '../../models/App'
import {Task} from '../../models/Task'
import {Div, I} from 'reactronic-dom'
import {style} from './Buttons.css'
import {IButtonRender} from '../../models/IButtonRender'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const TrashButtonView: IButtonRender = function (app : App, task : Task) {
  return(
    Div('TrashButton' + task.id, e=> {
      e.className = task.isCompleted ? style.class.TrashBtnChecked : style.class.TrashBtn
      e.id = 'TrashBtn' + task.id
      e.onclick = () =>  app.deleteTask(task)
      I('TrashIcon' + task.id, e => {
        e.className = 'fa-solid fa-trash'
      })
    })
  )
}
