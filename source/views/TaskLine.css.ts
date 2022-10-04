import {restyler} from 'reactronic-dom'
import {css} from '@emotion/css'

export  const style = restyler(()=> {
  return{
    TaskLineDiv:css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      left: 0;
      width: 100%;
    `,
    DivContent:css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      font-size: 24px;
      height: 55px;
      color: rgb(60,60,60);
      display: flex;
      align-items: center;
      padding: 6px 10px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      border-radius: 10px 0 0 10px;
      width: calc(100vw - 230px);
      :hover {
        background-color: rgba(221,255,255,0.25);
      }
    `,
    DivContentCompleted:css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      font-size: 24px;
      height: 55px;
      color: rgb(60,60,60);
      display: flex;
      align-items: center;
      padding: 6px 10px;
      background-color: rgba(189,236,182,0.6);
      backdrop-filter: blur(5px);
      border-radius: 10px 0 0 10px;
      width: calc(100vw - 175px);
      cursor: pointer;
      :hover {
        background-color: rgba(189,236,182,0.25);
      }
    `,
    DivButtons: css`
      display: flex;
    `
  }
})
