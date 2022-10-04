import {App} from '../../models/App'
import {Task} from '../../models/Task'
import {Div, I} from 'reactronic-dom'
import {style} from './Buttons.css'
import {IButtonRender} from '../../models/IButtonRender'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const EditButtonView: IButtonRender = function (app : App, task : Task) {
  return(
    Div('Edit' + task.id, e => {
      e.className = style.class.EditBtn
      e.id = 'Edit' + task.id
      e.onclick = () => {
        app.submitTaskChange(task)
        console.log(task.isEdit)
      }
      I('EditIcon', e => {
        e.className = 'fa-solid fa-pen-to-square'
      })
    })
  )
}
