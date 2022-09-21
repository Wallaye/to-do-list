import {restyler} from 'reactronic-dom'
import {css} from '@emotion/css'

export const style = restyler(() => {
  return{
    TaskList: css`
      display: flex;
      justify-content: center;
      flex-direction: column;
    `,
    CompletedLabel: css`
      align-self: flex-start;
      margin: 10px 0;
      color: white;
      font-size: 24px;
    `
  }
})
