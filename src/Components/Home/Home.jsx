import React from 'react'
import './home.css'
import video from '../../assets/vid1.mp4'
import {CiLocationOn} from 'react-icons/ci'
import {BsCalendarDate} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'


const Home = () => {
  return (
    <section className='home'>
      <div className="overplay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span className="smallText">
            Neki tekst
          </span>

          <h1 className='homeTitle'>
            Zakažite svoj termin
          </h1>
        </div>

        <div className="cardDiv grid">
          <div className="lokacijaInput">
            <label htmlFor="adresa">Vaša adresa:</label>
            <div className="input flex">
              <CiLocationOn className="icon"/>
              <input type="text" placeholder='Unesite Vašu adresu ovde'/>
            </div>
          </div>


          <div className="dateInput">
            <label htmlFor="date">Odaberite datum:</label>
            <div className="input flex">
              <BsCalendarDate className="icon"/>
              <input type="date" placeholder='Unesite Vašu adresu ovde'/>
            </div>
          </div>


          <div className="zakazi flex">
            
            <button className='btn'>ZAKAŽI</button>
          </div>

          
        
        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <BsFacebook className="icon"/>
            <BsInstagram className="icon"/>
            <AiOutlinePhone className="icon"/>
          </div>

          <div className="leftIcons">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home