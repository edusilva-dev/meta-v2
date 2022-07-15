import { FC } from 'react'
import './styles.scss'

import { cards } from 'src/data/cards'
import Card from './card/Card'

const Services: FC = () => {
  return (
    <div className="services" id="servicos">
      <h2 className="services__title">Nossos serviços</h2>
      <div className="services__list">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default Services
