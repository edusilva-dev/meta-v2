import { FC } from 'react'
import './styles.scss'

import Input from './components/input/Input'
import TextArea from './components/text-area/TextArea'

const Form: FC = () => {
  return (
    <div className="form">
      <h2 className="form__title">Ou envie-nos uma mensagem</h2>

      <form className="form__container">
        <Input type="text" name="name" id="name" placeholder="Nome" />

        <Input type="text" name="email" id="email" placeholder="Email" />

        <TextArea name="message" id="message" placeholder="Digite sua mensagem" />

        <button className="form__button">Enviar</button>
      </form>
    </div>
  )
}

export default Form
