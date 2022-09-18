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
      Div('Title', e => {
        e.className = style.class.Title
        e.innerHTML = page.title
      })
      Div('Content', e => {
        e.className = style.class.Content
      }).wrapWith(customizeContent)
    }).wrapWith(customizeRightSide)
  )
}
