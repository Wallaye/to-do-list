import {RxUL} from 'reactronic-dom'
import {TaskLineView} from './TaskLine.view'
import {style} from './TaskList.css'
import {IButtonRender} from '../models/IButtonRender'
import {EditButtonView} from './buttons/EditButton.view'
import {CheckButtonView} from './buttons/CheckButton.view'
import {TrashButtonView} from './buttons/TrashButton.view'
import {SubmitButtonView} from './buttons/SubmitButton.view'
import {ButtonRenderer} from '../models/ButtonRenderer'
import {UncheckButtonView} from './buttons/UncheckButton.view'
import {ReactiveTaskList} from '../models/TaskList'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function TaskListView(taskList: ReactiveTaskList, completed: boolean) {
  const name: string = completed ? 'CompletedTaskList' : 'TaskList'
  RxUL(name, taskList, e => {
    e.className = style.class.TaskList
    e.id = name
    taskList.sensors.listen(e, true)
    taskList.taskList.forEach((element) => {
      if (element.isCompleted == completed) {
        const render: IButtonRender[] = element.isEdit ? [SubmitButtonView] :
          element.isCompleted ? [UncheckButtonView, TrashButtonView] : [EditButtonView, CheckButtonView, TrashButtonView]
        const renderer: ButtonRenderer = new ButtonRenderer(taskList, element, render)
        TaskLineView(element, renderer)
      }
    })
  })
}
