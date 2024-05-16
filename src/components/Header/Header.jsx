import React from 'react'
import { StyleLine, StyleLogoText } from './Header.styled'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <div>
        <Link to="/"><StyleLogoText>Events App</StyleLogoText></Link>
        
        <StyleLine></StyleLine>
    </div>
  )
}
