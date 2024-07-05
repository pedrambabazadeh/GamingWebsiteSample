import React from 'react'
import { ToggleOff, ToggleOn } from '@mui/icons-material' 
import './dark-light-button.css'
import { useDarkLight } from '../../hooks/ModeProvider'

export default function DarkLightButton() {
const [buttonSituation, toggleDarkLight] = useDarkLight();

  return (
    <div data-name="light-dark">
    <span data-text="light"> Light Mode:</span>
    {!buttonSituation &&<ToggleOn data-name="toggle-button" color="primary" style={{fontSize : "2.5rem"}} onClick={toggleDarkLight}/>}
    {buttonSituation &&<ToggleOff data-name="toggle-button" color="primary" style={{fontSize : "2.5rem"}} onClick={toggleDarkLight}/>}
  </div>
  )
}
