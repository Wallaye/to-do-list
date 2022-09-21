import {restyler} from 'reactronic-dom'
import {css} from  '@emotion/css'

export const style = restyler( () => {
  return{
    TaskLists: css`
      height: calc(100vh - 100px);
      overflow: auto !important;
      overflow-y: scroll;
    `
  }
})
