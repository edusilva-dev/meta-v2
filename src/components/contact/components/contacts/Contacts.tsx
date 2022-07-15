import { FC } from 'react'
import './styles.scss'

const Contacts: FC = () => {
  return (
    <div className="contacts">
      <h2 className="contacts__title">Se interessou? Entre em contato agora mesmo!</h2>

      <div className="contacts__contact contact">
        <a href="mailto:contato@metasegurancaltda.com.br" className="contact__info">
          contato@metasegurancaltda.com.br
        </a>
      </div>

      <div className="contacts__contact contact">
        <a href="tel:+5551993679644" className="contact__info">
          (51) 9 8423-7806
        </a>
      </div>
    </div>
  )
}

export default Contacts
