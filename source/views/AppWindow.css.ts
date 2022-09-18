//--------------------------------------------------------------------------------------------------
// Copyright © Nezaboodka™ Software LLC. All rights reserved.
// Licensed under the Apache License, Version 2.0.
//--------------------------------------------------------------------------------------------------

import { css } from '@emotion/css'
import { restyler } from 'reactronic-dom'
import { themes } from './Themes'

export const style = restyler(() => {
  return {
    Body: css`
      grid-row: 2 / span 1;
      grid-column: 2 / span 3;
    `
  }
})
