//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { ReactiveObject, reaction, Transaction, isnonreactive, nonreactive } from 'reactronic'
import { Page } from './Page'
import {Task} from './Task'


export const ProjectLink = 'https://github.com/nezaboodka/nevod'

export class App extends ReactiveObject {
  @isnonreactive readonly version: string
  @isnonreactive readonly homePage: Page;
  taskList: Task[] = []
  newTask : Task;

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home')
    this.newTask = new Task('')
  }
}
