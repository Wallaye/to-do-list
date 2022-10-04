import {restyler} from 'reactronic-dom'
import {css} from '@emotion/css'

export const style = restyler(() => {
  return{
    TaskList: css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin-top: 15px;
      padding: 20px;
    `
  }
})
