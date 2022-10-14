import {Task} from '../models/Task'
import {Div, Input, RxInput, RxLI} from 'reactronic-dom'
import {style} from './TaskLine.css'
import {ButtonRenderer} from '../models/ButtonRenderer'


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskLineView(task: Task, renderer: ButtonRenderer) {
  return (
    RxLI('TaskDiv' + task.id, task, e => {
      e.className = style.class.TaskLineDiv
      e.draggable = true
      e.dataForSensor.htmlDraggable = !task.isCompleted && !task.isEdit ? task : undefined
      e.dataForSensor.htmlDrag = !task.isCompleted && !task.isEdit ? task : undefined
      let inputArea: HTMLInputElement
      task.htmlElement = e
      e.onclick = () => {
        e.className = style.class.TaskLineDiv
      }
      Input('DivContent+' + task.id, e => {
        const className: string = task.isCompleted ? style.class.DivContentCompleted : style.class.DivContent
        inputArea = e
        e.value = task.content
        e.className = className
        e.readOnly = true
        inputArea.oninput = () => renderer.onInputHandler(inputArea.value)
        if (!task.isCompleted) {
          if (!task.isEdit) {
            e.ondblclick = () => renderer.dblclickHandler()
            e.readOnly = true
            e.style.cursor = 'pointer'
            e.style.width = 'calc(100vw - 230px)'
          } else {
            e.style.width = 'calc(100vw - 120px)'
            e.readOnly = false
            e.style.cursor = 'text'
            e.selectionStart = e.value.length
            e.focus()
            e.onkeydown = (event) => {
              renderer.enterHandler(event)
            }
          }
        }
      })
      Div('Buttons' + task.id, e => {
        e.className = style.class.DivButtons
        e.id = 'Buttons'
        renderer.render()
      })
    })
  )
}
