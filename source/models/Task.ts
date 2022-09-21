import {isnonreactive, nonreactive, reaction, ReactiveObject, transaction} from 'reactronic'
import * as Console from 'console'
import {App} from './App'


export  class  Task extends ReactiveObject{
  content : string
  isCompleted : boolean

  constructor(content: string) {
    super()
    this.content = content
    this.isCompleted = false
  }
  @transaction
  setContent(content: string | null):void {
    if (content != null)
      this.content = content
  }
  @transaction
  changeCompleted():void {
    this.isCompleted = !this.isCompleted
  }
}


