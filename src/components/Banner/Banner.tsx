import React, {ReactNode, useState, useRef, useEffect} from 'react'
import './banner.css'
import { Url } from 'url'
import { useInViewPort } from '../../hooks/useInViewPort'

interface BannerProps
{
    href: string,
    children: ReactNode
}

const Banner = ({href, children} : BannerProps) => {
  const [show, setShow] = useState<boolean>(false);
  const bannerTarget = useRef<HTMLDivElement>(null);
  const isVisible = useInViewPort(bannerTarget);
  useEffect (()=>{setShow(isVisible)}, [isVisible])
  return (
<div style={{height: '90vh'}}>
  <div className='banner'
  ref={bannerTarget}
  style={{height: `${show? 90 : 0}vh`}}>
      <h1 data-text="center md-primary-shadow">
          <a href={href}>
              {children}
          </a>
          </h1>
  </div>
</div>
  )
}

export default Banner