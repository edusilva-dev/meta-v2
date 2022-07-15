import React, { FC } from 'react'
import './styles.scss'

import { ITextArea } from './TextArea.interfaces'

const TextArea: FC<ITextArea> = ({ name, id, placeholder }) => {
  return <textarea className="form__textarea" name={name} id={id} placeholder={placeholder} />
}

export default TextArea
