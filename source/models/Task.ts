import {isnonreactive, ReactiveObject, transaction} from 'reactronic'
import {style} from '../views/TaskLine.css'

export class Task extends ReactiveObject {
  @isnonreactive id: number
  @isnonreactive static nextId: number = 0
  content: string
  isCompleted: boolean
  isEdit: boolean
  @isnonreactive htmlElement : HTMLElement | null = null

  constructor(content: string) {
    super()
    this.content = content
    this.isCompleted = false
    this.isEdit = false
    this.id = Task.nextId++
  }

  @transaction
  setContent(content: string | null): void {
    if (content != null)
      this.content = content
  }

  @transaction
  changeCompleted(): void {
    this.isCompleted = !this.isCompleted
  }

  taskFocus(): void {
    if (this.htmlElement){
      this.htmlElement.scrollIntoView()
      this.htmlElement.className = style.class.Animation
    }
  }
}
