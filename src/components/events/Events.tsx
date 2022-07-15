import { FC } from 'react'
import Carousel from './components/carousel/Carousel'
import './styles.scss'

const Events: FC = () => {
  return (
    <div className="events" id="eventos">
      <div className="events__wrapper">
        <h2 className="events__title">Últimos eventos</h2>
      </div>

      <div className="events__carousel">
        <Carousel />
      </div>
    </div>
  )
}

export default Events
