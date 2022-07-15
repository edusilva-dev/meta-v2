import { FC } from 'react'
import './styles.scss'

import Contacts from './components/contacts/Contacts'
import Form from './components/form/Form'

const Contact: FC = () => {
  return (
    <div className="contact_container" id="contato">
      <Contacts />
      <Form />
    </div>
  )
}

export default Contact
