import React, { useEffect, useState, useRef } from 'react'
import './main-page.css'
import { Button, useTheme } from '@mui/material';
import {Banner, CardGroup, FixedBanner, SocialMediaGroup, ToggleMenu} from '../../components'
import { useMenu, usePageOpener, useRefs, useDarkLight } from '../../hooks/ModeProvider';
import CardGroupSection from '../cardGroupSection/CardGroupSection';

export default function MainPage() {
    const theme = useTheme();
    const [pageIsOpen, togglePage] = usePageOpener();
    //useEffect(()=>togglePage(), [])
    const mainPageRef = useRef<HTMLDivElement>(null);
    const currentHeight = pageIsOpen.isOpen ? mainPageRef.current?.scrollHeight! + 100 : 0;
    const height = currentHeight + "px";
    const [isDark] = useDarkLight();
  return (
    <div
      ref={mainPageRef}
      style={{height : height}}
      data-open={pageIsOpen.isOpen}
      data-text = {theme.palette.secondary.light}
      data-overflow = "hidden"
      data-transition = "main"
      data-z-index = "min"
      data-dark = {isDark}
      data-name="main-container"
      className='main-container'>
      <Banner href="#">
         Sample Gaming website
         <div>
         <Button variant='outlined' color='secondary'> Become a member</Button>
          </div>
      </Banner>
      <SocialMediaGroup/>
      <CardGroupSection/>
      <FixedBanner/>
    </div>
  )
}
