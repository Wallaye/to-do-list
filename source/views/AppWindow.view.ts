import {Div} from 'reactronic-dom'
import {App} from '../models/App'
import {HomePageView} from './HomePage.view'

export function AppWindow(app: App) {
  return (
    Div('Body', () => {
      HomePageView(app)
    })
  )
}

