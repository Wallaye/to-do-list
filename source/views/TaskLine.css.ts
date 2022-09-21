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
    CheckedDiv: css`
      width: 55px;
      height: 55px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      border-radius: 0 10px 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      cursor: pointer;
      background-image: url('../assets/checked.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 24px 24px;
      :hover, :focus {
        background-color: rgba(221,255,255,0.25);
      }
    `,
    DivContent:css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      font-size: 24px;
      height: 43px;
      color: rgb(60,60,60);
      display: flex;
      align-items: center;
      padding: 6px 10px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      border-radius: 10px 0 0 10px;
      width: calc(100vw - 120px);
      :hover {
        background-color: rgba(221,255,255,0.25);
      }
    `,
    Checked: css`
      width: 24px;
      height: 24px;
    `,
    CheckedDivCompleted: css`
      width: 55px;
      height: 55px;
      background-color: rgba(189,236,182,0.6);
      backdrop-filter: blur(5px);
      border-radius: 0 10px 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      cursor: pointer;
      background-image: url('../assets/checked.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 24px 24px;
      :hover, :focus {
        background-color: rgba(189,236,182,0.25);
      }
    `,
    DivContentCompleted:css`
      font-family: Comic Sans MS, Comic Sans, cursive;
      font-size: 24px;
      height: 43px;
      color: rgb(60,60,60);
      display: flex;
      align-items: center;
      padding: 6px 10px;
      background-color: rgba(189,236,182,0.6);
      backdrop-filter: blur(5px);
      border-radius: 10px 0 0 10px;
      width: calc(100vw - 120px);
      :hover {
        background-color: rgba(189,236,182,0.25);
      }
    `
  }
})
