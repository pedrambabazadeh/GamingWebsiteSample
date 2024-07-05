import React, { ReactNode } from 'react'
import { DarkLightProvider, PageOpenProvider, VideoProjectorProvider, MenuProvider, ScrollingBoxProvider  } from './ModeProvider'

export default function ModesHOC({children} :  {children: ReactNode}) {
  return (
    <DarkLightProvider>
    <PageOpenProvider>
    <VideoProjectorProvider>
    <MenuProvider>
    <ScrollingBoxProvider>
      {children}
    </ScrollingBoxProvider>
   </MenuProvider>
   </VideoProjectorProvider>
   </PageOpenProvider>
   </DarkLightProvider>
  )
}
