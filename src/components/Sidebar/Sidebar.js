import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import logoS from '../../assets/images/logo-s.png'
import logoSubtitle from '../../assets/images/sub-Said-logo.png'

function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logoS} alt="logo" />
        <img src={logoSubtitle} alt="logosubtitle" />
      </Link>
    </div>
  )
}

export default Sidebar
