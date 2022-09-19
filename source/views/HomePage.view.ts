import {Div, TextArea} from 'reactronic-dom'
import {App} from '../models/App'
import {PageView} from './Page.view'
import {style} from './HomePage.ccs'

export  function HomePageView(app : App) {
  return (
    PageView(app.homePage, e => {
      Div('Input', e => {
        let textArea: HTMLTextAreaElement
        e.className = style.class.Input
        e.id = 'Input'
        TextArea('Text', e => {
          textArea = e
          e.placeholder = 'Enter the text'
        })
      })
    })
  )
}
