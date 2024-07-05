import React, {useState} from 'react'
import './iframe-projector.css'
import { useVideoProjector } from '../../hooks/ModeProvider';

export default function  () {

const [isOpen] = useVideoProjector();
const address:string = "https://www.youtube.com/embed/_-CaT6hgh64?si=aG52m7Yqxj1p9g1t";
const allowString:string = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  return (
    <iframe data-name="iframe-projector" data-open={isOpen} width="560" src={address} title="YouTube video player" frameBorder="0" allow={allowString} referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  )
}
