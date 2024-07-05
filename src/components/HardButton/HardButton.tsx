import React, { Children, ReactNode } from 'react'
import './hard-button.css'
import { HardButtonProps } from './HardButton.types';


export default function HardButton(props: HardButtonProps) {

  const {top, left, right, children, className, ...other} = props

  const HardButtonClassNames = className || '';
  return (
       <div
      {...other}
      className={`hard-button-container ${HardButtonClassNames}`}
      style={{top:top, left:left, right:right}}>
        {children}
      </div>
  )
}
