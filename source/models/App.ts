//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {ReactiveObject, reaction, Transaction, isnonreactive, nonreactive, transaction} from 'reactronic'
import {Page} from './Page'
import {Task} from './Task'
import * as JSDOM from 'jsdom'

export const ProjectLink = 'https://github.com/nezaboodka/nevod'

export class App extends ReactiveObject {
  @isnonreactive readonly version: string
  @isnonreactive readonly homePage: Page
  @isnonreactive completedTasks = 0
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
  editTask(task: Task, newContent?: string): void {
    if (task.isEdit) {
      if (newContent != null) {
        task.content = newContent
      }
      task.isEdit = false
    } else {
      task.isEdit = true
    }
  }

  @reaction
  updateTasks(): void {
    this.completedTasks = this.taskList.filter(x => x.isCompleted).length
    localStorage.setItem('tasks', JSON.stringify(this.taskList))
  }
}
