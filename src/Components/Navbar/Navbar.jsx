import React, {useState} from 'react'
import './navbar.css'
import {FaChild} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active, setActive]=useState('navBar');
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar=()=>{
    setActive('navBar')
  }

  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1><FaChild className="icon"/> MedicaMea</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Početna</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">O meni</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Kontakt</a>
            </li>

            <button className='btn'>
              <a href="#">Zakaži pregled</a>
            </button>

          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>

        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar