//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {cached, isnonreactive, nonreactive, reaction, ReactiveObject} from 'reactronic'
import {HtmlSensors} from 'reactronic-dom'


export class Page extends ReactiveObject {
  @isnonreactive readonly pagePath: string
  menuName: string
  title: string
  topicPath: string
  content: string
  isActive: boolean
  sensor: HtmlSensors

  constructor(pathBase: string) {
    super()
    this.pagePath = pathBase
    this.menuName = ''
    this.title = ''
    this.topicPath = ''
    this.content = ''
    this.isActive = false
    this.sensor = new HtmlSensors()
  }
  @reaction
  getSensorData():void{
    this.sensor.button.pointerButton
  }
}
