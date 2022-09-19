import {Div, Input, TextArea} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'

export  function HomePageView(app : App) {
  return (
    PageView(app.homePage, e => {
      Div('Input', e => {
        let input: HTMLInputElement
        e.className = style.class.InputDiv
        e.id = 'InputDiv'
        Input('Text', e => {
          input = e
          e.type = 'text'
          e.className = style.class.InputArea
          e.placeholder = 'Enter the text'
        })
      })
    })
  )
}
