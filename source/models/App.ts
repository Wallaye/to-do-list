//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {ReactiveObject, reaction, Transaction, isnonreactive, nonreactive, transaction} from 'reactronic'
import { Page } from './Page'
import {Task} from './Task'
import {HtmlSensors} from 'reactronic-dom'


export const ProjectLink = 'https://github.com/nezaboodka/nevod'

export class App extends ReactiveObject {
  @isnonreactive readonly version: string
  @isnonreactive readonly homePage: Page;
  @isnonreactive completedTasks = 0;
  taskList: Task[] = []
  newTask : Task;

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home')
    this.newTask = new Task('')
  }

  @transaction
  addTask(content: string | null):void{
    this.taskList = this.taskList.toMutable()
    if (content != null)
      this.taskList.push(new Task(content))
  }
  @reaction
  updateTasks() : void {
    this.completedTasks = this.taskList.filter(x => x.isCompleted).length
  }
}
