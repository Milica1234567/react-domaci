import React, {useEffect} from 'react'
import './footer.css'

import video2 from '../../assets/vid2.mp4'
import logo from '../../assets/logo34.png'

import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {FiSend} from 'react-icons/fi'

import Aos, { init } from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            
            <h2>MEDICA MEA</h2>
            
            <small>Naš newsletter</small>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Vaš email'/>
            <button data-aos="fade-up" className='btn flex'type='submit'>
              PRIJAVI ME<FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div data-aos="fade-up" className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <img src={logo} alt="" />
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
            Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ullam inventore eos
            fuga hic cum voluptatem minima, tempore
            non odio provident nobis ipsam at,
            doloremque sed cupiditate ipsum in,
            atque soluta?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
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