import {reaction, ReactiveObject, transaction} from 'reactronic'
import * as Console from 'console'


export  class  Task extends ReactiveObject{
  content : string

  constructor(content: string) {
    super()
    this.content = content
  }

  @transaction
  setContent(content: string | null):void{
    if (content != null)
      this.content = content
  }
}


