import React from 'react'
import './toggle-menu.css'
import { useMenu } from '../../hooks/ModeProvider'
import DarkLightButton from '../DarkLightButton/DarkLightButton';

export default function ToggleMenu() {

  const [isOpen] = useMenu();

  return (
    <div  data-name="toggle-menu" data-open={isOpen} data-view="fixed">
      <ul data-text="light">
        <li>Main page</li>
        <li> About us</li>
        <li>Contact us</li>
      </ul>
      <DarkLightButton/>
    </div>
  )
}
