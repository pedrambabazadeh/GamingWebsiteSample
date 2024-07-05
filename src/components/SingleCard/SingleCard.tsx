import React, {  useEffect, useRef, useState } from 'react'
import './single-card.css'
import { Button } from '@mui/material'
import { useRefs } from '../../hooks/ModeProvider';

export default function SingleCard() {

  const [, addRef] = useRefs();

  const cardRef = useRef<HTMLDivElement>(null);
useEffect(()=>{
  addRef({singleCardRef : cardRef})
  console.log(`from singleCard${cardRef.current?.offsetWidth}`)

}, [])

  return (
    <div ref={cardRef} data-name="single-card" data-view="inline-block" className="single-card">
          <img src="images/DownloadedBack.webp" />
          <h2 data-name="card-text"> Card information</h2>
          <p data-name="card-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eleifend turpis non urna efficitur,
 in malesuada eros varius. Vestibulum fringilla tempus leo vitae faucibus.
  Etiam porta felis id justo bibendum, eget congue turpis porttitor.
  Curabitur at vulputate lacus,
          </p>
          <Button variant="outlined" color='primary'> Cick me</Button>
        </div>
  )
}
