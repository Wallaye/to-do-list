import {restyler} from 'reactronic-dom'
import {css} from  '@emotion/css'

export const style = restyler( () => {
  return{
    TaskLists: css`
      height: calc(100vh - 100px);
      overflow: auto !important;
      overflow-y: scroll;
    `,
    CompletedLabel: css`
      align-self: flex-start;
      margin: 5px 20px;
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
