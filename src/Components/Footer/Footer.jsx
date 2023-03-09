import React from 'react'
import './footer.css'
import video2 from '../../assets/vid2.mp4'
import logo from '../../assets/logo34.png'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'

import {FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            
            <h2>MEDICA MEA</h2>
            
            <small>Naš newsletter</small>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Vaš email'/>
            <button className='btn flex'type='submit'>
              PRIJAVI ME<FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <img src={logo} alt="" />
              </a>
            </div>

            <div className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ullam inventore eos
            fuga hic cum voluptatem minima, tempore
            non odio provident nobis ipsam at,
            doloremque sed cupiditate ipsum in,
            atque soluta?
            </div>

            <div className="footerSocials flex">
            <BsFacebook className="icon"/>
            <BsInstagram className="icon"/>
            <AiOutlinePhone className="icon"/>
            </div>

          </div>

         
        </div>
      </div>
    </section>
  )
}

export default Footer