import React from 'react'
import HardButton from '../HardButton/HardButton'
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'

export default function SocialMediaGroup() {
  return (
    <div data-view="fixed" style={{top:"20%", right:"5px"}} data-z-index="max">
        <HardButton title="linkedin" data-view="flex" data-padding="xs" data-margin-bottom="xs" >
            <LinkedIn/>
        </HardButton>
        <HardButton title="facebook" data-view="flex" data-padding="xs"  data-margin-bottom="xs"  >
            <Facebook/>
        </HardButton>
        <HardButton title="instagram" data-view="flex" data-padding="xs" data-margin-bottom="xs" >
            <Instagram/>
        </HardButton>
    </div>
  )
}
