//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { Div } from 'reactronic-dom'
import { App } from '../models/App'
import {HomePageView} from './HomePage.view'


export function AppWindow(app: App) {
  return (
    Div('Body', e => {
      HomePageView(app)
    })
  )
}

