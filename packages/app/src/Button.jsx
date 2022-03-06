import React from 'react'

const Button = ({disabledStatus, text}) => (
  <button type='button' disabled={disabledStatus} className="cart-btn">
    {text}
  </button>
)

export default Button
