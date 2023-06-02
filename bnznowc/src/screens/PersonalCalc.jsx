import React from 'react'
import PMenu0 from '../componentspersonal/Pmid/PMenu0'
import PMenu1 from '../componentspersonal/Pmid/PMenu1'
import PMenu2 from '../componentspersonal/Pmid/PMenu2'
import PMenu3 from '../componentspersonal/Pmid/PMenu3'
import PMenu4 from '../componentspersonal/Pmid/PMenu4'
import PMenu5 from '../componentspersonal/Pmid/PMenu5'
import PMenu6 from '../componentspersonal/Pmid/PMenu6'
import PMenu7 from '../componentspersonal/Pmid/PMenu7'
import Footer from '../componentspersonal/Pbot/Footer'
const PersonalCalc = () => {
  return (
    <div>
      <div className='biggest'></div>
      <div className='big'></div>
          <div className='menu0box'>
            <PMenu0 />
          </div>
        <div className='allmenu'> 
            <PMenu1 />
            <PMenu2 />
            <PMenu3 />
            <PMenu4 />
            <PMenu5 />
            <PMenu6 />
            <PMenu7 />
        </div> 
     
            <Footer />
        
    </div>
  )
}

export default PersonalCalc;