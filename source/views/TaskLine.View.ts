import {App} from '../models/App'
import {Task} from '../models/Task'
import {Div, I, RxDiv, RxLI} from 'reactronic-dom'
import {style} from './TaskLine.css'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskLineView(app: App, task: Task){
  return(
    RxLI('TaskDiv' + task.id, null, e => {
      e.className = style.class.TaskLineDiv
      if (!task.isEdit) {
        RxDiv('DivContent+' + task.id, null, e => {
          e.textContent = task.content
          e.className = style.class.DivContent
          e.ondblclick = () => app.editTask(task)
        })
        Div('Edit' + task.id, e => {
          e.className = style.class.EditBtn
          e.id = 'Edit' + task.id
          e.onclick = () => {
            app.editTask(task)
          }
          I('EditIcon', e => {
            e.className = 'fa-solid fa-pen-to-square'
          })
        })
        Div('Checked' + task.id, e => {
          e.className = style.class.CheckBtn
          e.id = 'Checked' + task.id
          e.onclick = () => {
            task.changeCompleted()
          }
          I('CheckIcon' + task.id, e => {
            e.className = 'fa-solid fa-check'
          })
        })
        Div('TrashButton' + task.id, e=> {
          e.className = style.class.TrashBtn
          e.id = 'TrashBtn' + task.id
          e.onclick = () =>  app.deleteTask(task)
          I('TrashIcon' + task.id, e => {
            e.className = 'fa-solid fa-trash'
          })
        })}
      else {
        let inputArea : HTMLDivElement
        Div('EditableTask' + task.id, e => {
          inputArea = e
          e.contentEditable = 'true'
          e.focus()
          e.textContent = task.content
          e.className = style.class.DivContent
          e.style.width = 'calc(100vw - 120px)'
          e.id = 'EditableTask' + task.id
          e.onkeydown = (event) => {
            if (event.code == 'Enter'){
              event.preventDefault()
              if (inputArea.textContent !== null && inputArea.textContent.trim() !== ''){
                app.editTask(task, inputArea.textContent)
              }
            }
          }
        })
        Div('Submit' + task.id, e => {
          e.className = style.class.CheckBtn
          e.style.borderRadius = '0 10px 10px 0'
          e.style.fontSize = '30px'
          e.id = 'Submit' + task.id
          e.onclick = () => {
            if (inputArea.textContent !== null && inputArea.textContent.trim() !== '') {
              app.editTask(task, inputArea.textContent)
            }
          }
          I('SubmitIcon' + task.id, e => {
            e.className = 'fa-solid fa-spell-check'
          })
        })
      }
    })
  )
}
