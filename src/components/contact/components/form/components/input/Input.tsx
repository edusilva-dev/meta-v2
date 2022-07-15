import React, { FC } from 'react'
import './styles.scss'

import { IInput } from './Input.interfaces'

const Input: FC<IInput> = ({ type, name, id, placeholder }) => {
  return <input className="form__input" type={type} name={name} id={id} placeholder={placeholder} />
}

export default Input
