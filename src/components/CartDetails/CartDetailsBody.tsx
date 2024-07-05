import React from 'react'
import { Button } from '@mui/material'
import Close from '@mui/icons-material/Close'

export default function CartDetailsBody({isOpen, content, close, ...otherProps }: any) {

  return (
    <div data-name="cart-details" {...otherProps} data-open={isOpen}>
      <ul>
        <li>
          <p>Item name</p>
          <p>price</p>
        </li>
      </ul>
      <Button variant='outlined'>Check out</Button>
      <div className='form-close-button'>
        <Button variant='outlined' onClick={close}>
        <Close></Close>
        </Button>
      </div>
    </div>
  )
}
