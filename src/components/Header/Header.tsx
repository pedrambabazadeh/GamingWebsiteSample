import React from 'react'
import './header.css'
import HardButton from '../HardButton/HardButton'
import {ShoppingBasket } from '@mui/icons-material';
import { usePageOpener, useScrollingBox} from '../../hooks/ModeProvider';
import { Avatar, Badge, Button, Card } from '@mui/material';
import UserInfoButton from '../user-info/UserInfoButton';
import MenuButtons from '../MenuButtons/MenuButtons';
import { Link } from 'react-router-dom';
import CartDetails from '../CartDetails/CartDetails';

export default function Header() {
  const[,togglePage] = usePageOpener();
  const badgeNumber: number = 5;
  const [,toggleCartDetails] = useScrollingBox();
  return (
    <header data-view="sticky full-screen" className='' style={{top: 0}}>
      <div
      data-radius = 'sm'
      className='grid-container'>
        <MenuButtons/>
        <div id="header-middle">
          <HardButton title='Logo' className='logo-container' data-view="flex absolute" onClick={togglePage}>
            <Link to="/">
              <img alt="logo" src="./images/logo.png"/>
            </Link>
          </HardButton>
        </div>
        <div id="header-right" data-text="right">
        <div data-view="inline-flex">
          <Button color="primary" variant='text' onClick={()=> toggleCartDetails.open("shopping")}>
              <Badge  badgeContent={badgeNumber} color='secondary'>
            <ShoppingBasket/>
              </Badge>
          </Button>
        <Button data-margin-left="sm" variant="text">
          <Link to="/login">
            <UserInfoButton text="Log in">
              <Avatar>
               N
              </Avatar>
            </UserInfoButton>
          </Link>
        </Button>
      </div>
        </div>
      </div>
    </header>
  )
}
