import './card-group.css'
import React from 'react'
import SingleCard from '../SingleCard/SingleCard'

export default function CardGroup({location}: {location:string}) {
  return (
    <div data-view="relative" className='card-group' data-overflow='hidden'>
      <div style={{left : location, position: 'relative'}} data-transition="main">
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
        <SingleCard/>
      </div>
    </div>
  )
}
