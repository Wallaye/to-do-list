//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { A, Div, RxA, RxDiv } from 'reactronic-dom'
import { App } from '../models/App'
import { style } from './AppWindow.css'
import { cx } from '@emotion/css'
import {PageView} from './Page.view'

export function AppWindow(
  app: App) {
  return (
    RxDiv('Body', null, e => {
      e.className = style.class.Body
      PageView(app.homePage)
    })
  )
}

