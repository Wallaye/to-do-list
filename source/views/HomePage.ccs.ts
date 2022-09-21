import {restyler} from 'reactronic-dom'
import {css} from  '@emotion/css'

export const style = restyler( () => {
  return{
    Task: css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      margin-top: 20px;
      height: 55px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      color: rgb(60,60,60);
      border: none;
      border-radius: 10px;
      width: calc(100vw - 100px);
      font-size: 24px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      :hover {
        background-color: rgba(221,255,255,0.25);
      }
    `
  }
})
