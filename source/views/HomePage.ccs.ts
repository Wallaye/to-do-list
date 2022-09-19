import {restyler} from 'reactronic-dom'
import {css} from  '@emotion/css'

export const style = restyler( () => {
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
      background-color: rgba(0,0,0,0.6);
      backdrop-filter: blur(5px);
      color: whitesmoke;
      border: none;
      border-radius: 10px;
      width: calc(100vw - 100px);
      font-size: 24px;
      vertical-align: middle;
      padding: 6px 10px;
      :hover, :focus {
        background-color: rgba(0,0,0,0.25);
      }
    `,
    Task: css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      margin-top: 20px;
      height: 55px;
      background-color: rgba(0,0,0,0.6);
      backdrop-filter: blur(5px);
      color: whitesmoke;
      border: none;
      border-radius: 10px;
      width: calc(100vw - 100px);
      font-size: 24px;
      display: flex;
      align-items: center;
      padding-left: 10px;
      :hover {
        background-color: rgba(0,0,0,0.25);
      }
    `
  }
})
