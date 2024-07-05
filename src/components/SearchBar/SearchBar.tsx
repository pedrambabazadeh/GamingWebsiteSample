import React from 'react'
import { Search } from '@mui/icons-material'
import './search-bar.css'

interface SearchBarProps
{
    PlaceHolder: string
}
export default function SearchBar(props: SearchBarProps) {
  return (
    <form className='search-bar'>
            <button type='submit'><Search/></button>
            <input placeholder={props.PlaceHolder} type="search"></input>
          </form>
  )
}
