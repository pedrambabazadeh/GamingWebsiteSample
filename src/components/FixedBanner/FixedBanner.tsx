import React, { useState, useRef, useEffect} from 'react'
import './fixed-banner.css'
import { useInViewPort } from '../../hooks/useInViewPort';

export default function FixedBanner() {
    const [show, setShow] = useState<boolean>(false);
    const fixedBannerTarget = useRef<HTMLDivElement>(null);
    const isVisible = useInViewPort(fixedBannerTarget);
    useEffect (()=>{setShow(isVisible)}, [isVisible])

  return (
    <div style={{height: '500px'}}>
    <div className='cover-border-top'></div>
    <div
     data-box='md-secondary-shadow'
     data-border='sm-radius'
      className='fixed-banner'
      style={{    height: `${show? 500 : 66}px`}}
      ref= {fixedBannerTarget}
      >&nbsp;
      </div>
      <div className='cover-border-bottom'></div>
      </div>
  )
}
