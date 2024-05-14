import React from 'react'
import { StyleLine, StyleLogoText } from './Header.styled'
// import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        {/* <NavLink to={'/'}>
            <p>Events App</p>
        </NavLink> */}
        <StyleLogoText>Events App</StyleLogoText>
        <StyleLine></StyleLine>
    </div>
  )
}
