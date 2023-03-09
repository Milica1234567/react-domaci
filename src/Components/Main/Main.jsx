import React from 'react'
import './main.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'



const Data = [
  {
    id: 1,
    imgSrc: img1,
    artTitle: 'Lorem ipsum',
    subtitle: 'Podnaslov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. Phasellus id dictum neque, a vulputate purus. Donec vitae auctor nibh. Aliquam at sem vel felis commodo efficitur. Nullam nisi lectus, dapibus vitae mollis in, lacinia et enim. Donec quis semper dolor, vel finibus odio.',
    readMore: '#'
    },
    {
    id: 2,
    imgSrc: img2,
    artTitle: 'Lorem ipsum',
    subtitle: 'Podnaslov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. Phasellus id dictum neque, a vulputate purus. Donec vitae auctor nibh. Aliquam at sem vel felis commodo efficitur. Nullam nisi lectus, dapibus vitae mollis in, lacinia et enim. Donec quis semper dolor, vel finibus odio.',
    readMore: '#'
    },
    {
    id: 3,
    imgSrc: img3,
    artTitle: 'Lorem ipsum',
    subtitle: 'Podnaslov',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. Phasellus id dictum neque, a vulputate purus. Donec vitae auctor nibh. Aliquam at sem vel felis commodo efficitur. Nullam nisi lectus, dapibus vitae mollis in, lacinia et enim. Donec quis semper dolor, vel finibus odio.',      readMore: '#'
    },
    {
      id: 5,
      imgSrc: img5,
      artTitle: 'Lorem ipsum',
      subtitle: 'Podnaslov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. Phasellus id dictum neque, a vulputate purus. Donec vitae auctor nibh. Aliquam at sem vel felis commodo efficitur. Nullam nisi lectus, dapibus vitae mollis in, lacinia et enim. Donec quis semper dolor, vel finibus odio.',      readMore: '#'
      },
    {
      id: 6,
      imgSrc: img6,
      artTitle: 'Lorem ipsum',
      subtitle: 'Podnaslov',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non augue turpis. Phasellus id dictum neque, a vulputate purus. Donec vitae auctor nibh. Aliquam at sem vel felis commodo efficitur. Nullam nisi lectus, dapibus vitae mollis in, lacinia et enim. Donec quis semper dolor, vel finibus odio.',      readMore: '#'
        },
    
  
]

const Main = () => {
  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 className="title">
          Nove objave
        </h3>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, artTitle, subtitle, description, readMore})=>{
              return(
                <div key={id} className="singleArtical">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={artTitle}/>
                  </div>

                  <div className="cardInfo">
                    <h4 className="artTitle">{artTitle}</h4>
                    <span className="content felx">
                      <h5>{subtitle}</h5>
                      <p>{description}</p>
                      <button className='btn'><a href={readMore}>Pročitaj više</a></button>
                    </span>
                  </div>
                </div>
              )
          })
        }
      </div>

    </section>
  )
}

export default Main