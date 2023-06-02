import React from 'react'
import TMenu0 from '../componentTrips/Tmid/TMenu0';
import TMenu1 from '../componentTrips/Tmid/TMenu1';
import TMenu2 from '../componentTrips/Tmid/TMenu2';
import TMenu3 from '../componentTrips/Tmid/TMenu3';
import TFooter from '../componentTrips/Tbot/Tfooter';
const TripsCalc = () => {
  return (
    <div>
      <TMenu0 />
      <div className='tripblack'></div>
      <div className='tripgrey'></div>
      <TMenu1 />
      <TMenu2 />
      <TMenu3 />
      <TFooter />
    </div>
  )
}

export default TripsCalc