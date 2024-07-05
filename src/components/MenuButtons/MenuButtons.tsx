import React from 'react'
import HardButton from '../HardButton/HardButton'
import { Button } from '@mui/material'
import { PlayArrow, Menu, Login, Language } from '@mui/icons-material'
import { useMenu, useVideoProjector } from '../../hooks/ModeProvider'

export default function MenuButtons() {

    const buttonTop: string = '60%'
    const [, toggleMenu] = useMenu();
    const [, toggleVideo] = useVideoProjector();
  return (
    <div id="header-left">
        {[{Left:'40px', Top:buttonTop, Content:<Menu/>, Title:'Menu', Click:toggleMenu},
        {Left:'110px', Top:buttonTop, Content:<PlayArrow/>, Title: 'play the Demu', Click:toggleVideo},
        {Left:'180px', Top:buttonTop, Content:<Login/>, Title:'log in', Click:()=>{}},
        {Left:'250px', Top:buttonTop, Content:<Language/>, Title:'Language', Click:()=>{}}]
        .map(( num, index) =>
        (<HardButton  data-view="flex absolute" className={'xs-button hide-until-lg'}
          key={index}
         left={num.Left}
         top={num.Top}
         title={num.Title}
         onClick={num.Click}>
          {num.Content}
          </HardButton>))}
          <Button color="primary" variant='outlined' className='show-until-lg' onClick={toggleMenu}>
            <Menu/>
        </Button>
        </div>
  )
}
