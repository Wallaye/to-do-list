import {Task} from '../../models/Task'
import {Div, I} from 'reactronic-dom'
import {style} from './Buttons.css'
import {IButtonRender} from '../../models/IButtonRender'
import {ReactiveTaskList} from '../../models/TaskList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const EditButtonView: IButtonRender = function (taskList: ReactiveTaskList, task: Task) {
  return (
    Div('Edit' + task.id, e => {
      e.className = style.class.EditBtn
      e.id = 'Edit' + task.id
      e.onclick = () => taskList.beginEdit(task)
      I('EditIcon', e => {
        e.className = 'fa-solid fa-pen-to-square'
      })
    })
  )
}
