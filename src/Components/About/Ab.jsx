import React from 'react'
import './about.css'
import profilna from '../../assets/profilna.JPG'


function Ab() {
  return (
    <section className='container-about'>
      <div class="red-a">

        <div class="o-meni-col">
            <img class="profilna" src={profilna}></img>
        </div>

        <div class="o-meni-col">
            <h1>Nešto ukratko o meni</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit distinctio porro pariatur aperiam
                dolorum ducimus illo non aliquid.
                Repellat ducimus ratione dolore cumque saepe vero expedita possimus sequi dicta.Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Ea velit distinctio porro pariatur aperiam dolorum ducimus
                illo non aliquid.
                Repellat ducimus ratione dolore cumque saepe vero expedita possimus sequi dicta.</p>
            <p class="potpis">dr Jelena Todić</p>
        </div>
      </div>
  </section>
  )
}

export default Ab