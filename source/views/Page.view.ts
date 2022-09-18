//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { Div, Customize } from 'reactronic-dom'
import { Page } from '../models/Page'
import { style } from './Page.css'

export function PageView(page: Page, customizeContent?: Customize<HTMLElement>, customizeRightSide?: Customize<HTMLElement>) {
  return (
    Div('PageView-' + page.pagePath, e => {
      e.className = style.class.Page
    }).wrapWith(customizeRightSide)
  )
}
