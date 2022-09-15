import React from 'react'
import { NavBar } from '../NavBar/NavBar'
import { Footer } from '../Footer/Footer'

// import { Link } from 'react-router-dom'


 export default function Restaurant() {
   
  
  return (
    <React.Fragment>
      <NavBar />
<iframe width="800" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=charlotte&restaurants=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> 
  
 <Footer />
    </React.Fragment>


  )
 }

