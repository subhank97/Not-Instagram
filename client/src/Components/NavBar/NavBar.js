import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import { ImInstagram } from 'react-icons/im';


function NavBar() {
  return (
    <>
    <Nav>
      <NavLink to="/">
        <ImInstagram />
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/profile">
          Profile
        </NavLink>
        <NavLink to="/sign-up">
          Signup
        </NavLink>
        <NavBtn>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </NavMenu>
    </Nav>
  </>
  )
}

export default NavBar