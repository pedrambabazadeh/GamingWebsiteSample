/*To Initialize the dark/light mode as well as language and closing/opening the page by licking the button*/
import React,  {Children, ReactNode, createContext,useContext,useEffect,useState}from 'react'
interface modeProviderProps
{
  children : ReactNode
}

interface pageHeightContextState
{
  isOpen: boolean,
  height: number
}

interface refObject {
  [key: string]: any;
}

/* Context for Menu*/

const MenuContext = createContext<any>(undefined);

export const MenuProvider = ({children} : modeProviderProps) =>{

  const [ menuIsOpen ,toggleMenu] = useState<boolean>(false);
  const toggleMyMenu = () => {toggleMenu(prev => !prev)}

  return(
    <MenuContext.Provider value={[menuIsOpen , toggleMyMenu]}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {

  let useMenu = useContext(MenuContext)
return useMenu;}


                         /* ++++++++++++++++++++++++++++++++++++++++++++++ */

  /*Context for opening/closing the main page*/

const PageOpenContext = createContext<any>(undefined);

export const PageOpenProvider = ({children} : modeProviderProps) =>{

  const [ pageIsOpen ,togglePage] = useState<pageHeightContextState>({
    isOpen: false,
    height: 0
  });
  const toggleMyPage = () => {togglePage({isOpen: !pageIsOpen.isOpen, height: 0 || 500}
    ); console.log(`Here is ModeProvider insige togglePage,
     setHeight in mainPage to auto and by useRef reset this height
      which is now statically set to:` + pageIsOpen.height)}
    //Using useRef update the Height while setting it to auto

  return(
    <PageOpenContext.Provider value={[pageIsOpen , toggleMyPage]}>
      {children}
    </PageOpenContext.Provider>
  )
}

export const usePageOpener = () => {

  let usePageOpener = useContext(PageOpenContext)
return usePageOpener;}

                         /* ++++++++++++++++++++++++++++++++++++++++++++++ */

  /*Context scrolling card group*/

  const RefsContext = createContext<any>(undefined);

  export const RefsProvider = ({children} : modeProviderProps) =>{
    const [refObject ,addRefObject] = useState<refObject>({singleCardRef:{current:{offsetWidth: 1}}})
    const addToRefObject = (newRef : refObject) => addRefObject((prevRefs)=> { return ({
      ...prevRefs,
      ...newRef
    })})

    useEffect(()=> console.log("from RefsContext" + refObject), [])

    return(
      <RefsContext.Provider value={[refObject, addToRefObject]}>
          {children}
      </RefsContext.Provider>
    )
  }

  export const useRefs = () => {let useRefs = useContext(RefsContext); return useRefs}


  /*Scrolling  Box for details*/

  const ScrollingBoxContext = createContext<any>(undefined);

  export const ScrollingBoxProvider = ({children} : modeProviderProps) =>{
    const [boxInfo ,editBoxInfo] = useState<refObject>({isBoxOpened:false, OpenedBox: ""})
    const toggleScrollingBox = (boxName: string) =>
      {
        editBoxInfo({isBoxOpened:true, openedBox: boxName})
      }

      const closeScrollingBox = () => editBoxInfo({isBoxOpened:false, openedBox: ""})

      //Objectifying two methods in one...

      const changeBox = {open: toggleScrollingBox, close: closeScrollingBox}

    return(
      <ScrollingBoxContext.Provider value={[boxInfo, changeBox ]}>
          {children}
      </ScrollingBoxContext.Provider>
    )
  }

  export const useScrollingBox = () => {let useScrolling = useContext(ScrollingBoxContext); return useScrolling}

/* Video Projector context */

const VideoProjectorContext = createContext<any>(undefined);

export const VideoProjectorProvider = ({children} : modeProviderProps) =>{
  const [videoIsOn, setVideo] = useState<boolean>(false);
  const toggleVideo = () => setVideo((prev) => !prev)
  return(
    <VideoProjectorContext.Provider value={[videoIsOn, toggleVideo]}>
      {children}
    </VideoProjectorContext.Provider>
  )
}

export const useVideoProjector = () => {let useVideoProjection = useContext(VideoProjectorContext); return useVideoProjection}

/* Dark Light  cojntext*/

const DarkLightContext = createContext<any>(undefined);

export const DarkLightProvider = ({children} : modeProviderProps) =>{
  const [isDarkMode, setDarkLight] = useState<boolean>(false);
  const toggleDarkLight = () => setDarkLight((prev) =>{ console.log("DarkLightToggle fired"); return !prev} )
  return(
    <DarkLightContext.Provider value={[isDarkMode, toggleDarkLight]}>
      {children}
    </DarkLightContext.Provider>
  )
}

export const useDarkLight = () => {let darkLight = useContext(DarkLightContext); return darkLight}