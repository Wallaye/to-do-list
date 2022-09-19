//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import {Div, Customize, Callback} from 'reactronic-dom'
import { Page } from '../models/Page'
import { style } from './Page.css'

export function PageView(page: Page, renderer?: Callback<HTMLElement>){
  return (
    Div('PageView-' + page.pagePath, e => {
      Div('Content', e => {
        e.id = 'Content'
        if (renderer)
          renderer(e)
      })
    })
  )
}
