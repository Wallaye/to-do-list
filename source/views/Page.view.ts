import { Callback, RxDiv} from 'reactronic-dom'
import { Page } from '../models/Page'
import { style } from './Page.css'

export function PageView(page: Page, renderer?: Callback<HTMLElement>){
  return (
    RxDiv('Content',null, e => {
      e.id = 'Content'
      e.className = style.class.Content
      if (renderer)
        renderer(e)
    })
  )
}
