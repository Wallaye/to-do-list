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
    `,
    CompletedLabel: css`
      align-self: flex-start;
      margin: 10px 0;
      color: rgb(60,60,60);
      width: 200px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      border-radius: 10px;
      font-size: 24px;
      font-family: Comic Sans MS, Comic Sans, cursive;
    `
  }
})
