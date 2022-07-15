import { FC } from 'react'
import './styles.scss'

import { ICard } from './Card.interfaces'

const Card: FC<ICard> = ({ title, icon, descriptions }) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__descriptions descriptions">
        {descriptions.map((description, index) => (
          <span key={index} className="descriptions__description">
            {description.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card
