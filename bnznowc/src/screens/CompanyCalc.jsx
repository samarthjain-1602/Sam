import React, { useState } from 'react';
import Menu0 from '../components/Menu0';
import Menu1 from '../components/Menu1';
import Menu2 from '../components/Menu2';
import Menu3 from '../components/Menu3';
import Menu4 from '../components/Menu4';

import Bot1container from '../components/Bot1container';


function Companycalc() {
 

const [openQues, setOpenQues] = useState(false);

const handleClick = () => {
  setOpenQues(!openQues)
}
  return ( 
  
<div className='biggercont'>
  <img className='logo'src='images/bnz logo.svg'></img>
    <div>
     <Menu0 />
    </div>
    <div className="container">
      <Menu1 />
      <Menu2 />
      <Menu3 />
      <Menu4 />
    </div>
    <div className='GREY'></div>
    <div className='BLACK'></div>
      <Bot1container />
</div>
   
  );
}
export default Companycalc;



