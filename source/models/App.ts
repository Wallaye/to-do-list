//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {ReactiveObject, reaction, isnonreactive, nonreactive, transaction} from 'reactronic'
import {Page} from './Page'
import {Task} from './Task'

export class App extends ReactiveObject {
  @isnonreactive readonly version: string
  @isnonreactive readonly homePage: Page
  completedTasks = 0
  taskList: Task[] = []
  newTask: Task

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home')
    this.newTask = new Task('')
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
  submitTaskChange(task: Task): void {
    if (task.isEdit) {
      if (task.content != '') {
        task.isEdit = false
      }
    } else {
      task.isEdit = true
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
