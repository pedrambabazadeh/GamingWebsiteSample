import React, { useEffect, useState, useRef } from 'react'
import { CardGroup, HardButton } from '../../components'
import { ArrowRight, ArrowLeft } from '@mui/icons-material'
import { useRefs } from '../../hooks/ModeProvider';

export default function CardGroupSection() {

  // needs to get modified by arrows
  const [refs] = useRefs();
  const [location, setLocation] = useState<string>("")
  const [currentWidth, setCurrentWidth] = useState<number>(1)
  const [currentMove, setCurrentMove] = useState<number>(0)
  const[currentScreen, setCurrentScreen] = useState<number>(1)
  const [quantity, setQuantity] = useState<number>(0)
  const [carouselPositionNumber, setCarouselPositionNumber] = useState<number>(0)

  const toLeft = () =>
{
  setCurrentMove((prev) => prev += (currentWidth + 20));
   setCarouselPositionNumber((prev)=> prev - 1)
  console.log(carouselPositionNumber);

}

const toRight = () =>
{
    setCurrentMove((prev )=> prev -= (currentWidth + 20))
    setCarouselPositionNumber((prev)=> prev + 1)
    console.log(carouselPositionNumber);
}

 const myLocation:string = `calc(${currentMove}px)`;
const screenRef = useRef<HTMLElement>(null)


  useEffect(()=> {
    const screenWidth = screenRef.current?.offsetWidth || 1;
    setCurrentScreen(screenWidth)
      console.log("trying to reRender CardGroup...")
      let width= () =>{
        if(refs.singleCardRef.current != (null || undefined))
        {
           return refs.singleCardRef.current.offsetWidth
        }
        else
        {
           return 1;
        }
      }
      setCurrentWidth(width);
      setLocation(myLocation);
      setQuantity(document.querySelectorAll("[data-name = single-card]").length)
}, [refs, myLocation, currentWidth])


  return (
    <section ref={screenRef}>
    <CardGroup location = {location}/>
    {carouselPositionNumber> 0 &&<HardButton title="scroll left"  data-view='absolute' top='45%' left='2%' className='arrows'  onClick={toLeft}>
            <ArrowLeft/>
      </HardButton>}
      {carouselPositionNumber< (quantity - Math.floor(currentScreen/ currentWidth)) &&<HardButton title="scroll right" data-view='absolute' top='45%' right='2%' className='arrows'   onClick={toRight}>
            <ArrowRight/>
      </HardButton>}
      </section>
  )
}
