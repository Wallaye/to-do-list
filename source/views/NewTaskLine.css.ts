import {restyler} from 'reactronic-dom'
import {css} from '@emotion/css'

export const style = restyler(() => {
  return {
    InputDiv: css`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      position: fixed;
      left: 0;
      bottom: 20px;
      width: 100%;
    `,
    InputArea: css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      margin: 0;
      height: 55px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      color: rgb(60,60,60);
      border: none;
      border-radius: 10px 0 0 10px;
      width: calc(100vw - 100px);
      font-size: 24px;
      vertical-align: middle;
      padding: 6px 10px;
      :hover, :focus {
        background-color: rgba(221,255,255,0.25);
        transition-duration: 0.2s;
      }
      ::placeholder {
        color: rgb(230,231,232);
    `,
    AddButton: css`
      height: 55px;
      width: 55px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      border-radius: 0 10px 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: whitesmoke;
      font-size: 30px;
      cursor: pointer;
      i{
        color: white;
      }
      :hover, :focus {
        background-color: rgba(221,255,255,0.25);
        transition-duration: 0.2s;
        i{
          color: aqua;
        }
      }
    `
  }
})
