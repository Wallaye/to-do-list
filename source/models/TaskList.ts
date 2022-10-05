import {reaction, ReactiveObject, transaction} from 'reactronic'
import {Task} from './Task'

export class ReactiveTaskList extends ReactiveObject {
  taskList: Task[] = []
  completedTasks = 0

  constructor() {
    super()
    const loadedTasks = JSON.parse(localStorage.getItem('tasks') as string) as Task[]
    if (loadedTasks !== null) {
      this.taskList = loadedTasks.map(x => {
        const task = new Task(x.content)
        task.isCompleted = x.isCompleted
        return task
      })
    }
  }

  @transaction
  addTask(content: string | null): void {
    this.taskList = this.taskList.toMutable()
    if (content != null)
      this.taskList.push(new Task(content))
  }

  @transaction
  deleteTask(task: Task): void {
    this.taskList = this.taskList.toMutable()
    this.taskList.splice(this.taskList.indexOf(task), 1)
  }

  @transaction
  beginEdit(task: Task): void {
    if (!task.isEdit) {
      task.isEdit = true
    }
  }

  @transaction
  submitTaskChange(task: Task): void {
    if (task.isEdit) {
      if (task.content != '') {
        task.isEdit = false
      }
    }
  }

  @transaction
  changeTask(task: Task, newContent?: string): void {
    if (newContent != null) {
      task.content = newContent
    }
  }

  @reaction
  updateTasks(): void {
    this.completedTasks = this.taskList.filter(x => x.isCompleted).length
    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }

}
