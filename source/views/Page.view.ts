//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {Div, Customize, Callback, RxDiv} from 'reactronic-dom'
import { Page } from '../models/Page'
import { style } from './Page.css'

export function PageView(page: Page, renderer?: Callback<HTMLElement>){
  return (
    RxDiv('Content',null, e => {
      e.id = 'Content'
      e.className = style.class.Content
      if (renderer)
        renderer(e)
    })
  )
}
