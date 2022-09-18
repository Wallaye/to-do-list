//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { ReactiveObject, reaction, Transaction, isnonreactive, nonreactive } from 'reactronic'
import { Page } from './Page'


export const ProjectLink = 'https://github.com/nezaboodka/nevod'

export class App extends ReactiveObject {
  @isnonreactive readonly version: string
  @isnonreactive readonly homePage: Page;

  constructor(version: string) {
    super()
    this.version = version
    this.homePage = new Page('/home')
  }
}
