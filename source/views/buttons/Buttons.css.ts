import {restyler} from 'reactronic-dom'
import {css} from '@emotion/css'

export const style = restyler(() => {
  return {
    EditBtn: css`
      width: 55px;
      height: 55px;
      background-color: rgba(221, 255, 255, 0.6);
      backdrop-filter: blur(5px);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
      i {
        color: white;
      }
      :hover, :focus {
        i {
          color: rgb(237, 96, 2);
        }
        background-color: rgba(221, 255, 255, 0.25);
      }
    `,
    TrashBtn: css`
      width: 55px;
      height: 55px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      border-radius: 0 10px 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
      i{
        color: white;
      }
      :hover, :focus {
        i{
          color: rgb(237,2,51);
        }
        background-color: rgba(221,255,255,0.25);
      }
    `,
    CheckBtn: css`
      width: 55px;
      height: 55px;
      background-color: rgba(221,255,255,0.6);
      backdrop-filter: blur(5px);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 40px;
      cursor: pointer;
      i{
        color: white;
      }
      :hover, :focus {
        i{
          color: rgb(189,236,182)
        }
        background-color: rgba(221,255,255,0.25);
      }
    `,
    TrashBtnChecked: css`
      width: 55px;
      height: 55px;
      background-color: rgba(189,236,182,0.6);
      backdrop-filter: blur(5px);
      border-radius: 0 10px 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
      i{
        color: white;
      }
      :hover, :focus {
        i{
          color: rgb(237,2,51);
        }
        background-color: rgba(189,236,182,0.25);
      }
    `,
    CheckBtnChecked: css`
      width: 55px;
      height: 55px;
      background-color: rgba(189,236,182,0.6);
      backdrop-filter: blur(5px);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      cursor: pointer;
      i{
        color: white;
      }
      :hover, :focus {
        i{
          color: rgb(189,236,182)
        }
        background-color: rgba(189,236,182,0.25);
      }
    `
  }
})
