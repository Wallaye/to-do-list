//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {cached, isnonreactive, nonreactive, reaction, ReactiveObject} from 'reactronic'
import {HtmlSensors} from 'reactronic-dom'


export class Page extends ReactiveObject {
  @isnonreactive readonly pagePath: string
  content: string
  isActive: boolean

  constructor(pathBase: string) {
    super()
    this.pagePath = pathBase
    this.content = ''
    this.isActive = false
  }
}
