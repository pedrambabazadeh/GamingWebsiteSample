import React from 'react'
import './cart-details.css'
import CartDetailsBody from './CartDetailsBody'
import { useScrollingBox } from '../../hooks/ModeProvider'

export default function CartDetails(props: any) {
  const [situation, situationChange] = useScrollingBox();
  return (
    <CartDetailsBody
        {...props}
        isOpen={situation.isBoxOpened}
        content={situation.openedBox}
        close={situationChange.close}
     />
  )
}
