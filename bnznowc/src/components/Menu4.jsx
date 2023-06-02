import React, { useState } from 'react';

import DropdownList from './DropdownList';


function Menu4(){
  
   
    
  const [count4, setCount4] = useState(0);
  const[skipques, setskipques] = useState(false);
    

  /* SKIP BUTTON */
function SkipButton({ onClick }) {
  return (
    <button className='skip'onClick={onClick}>Skip</button>
  );
}
  
   function increasecount4(){
    setCount4(count4 + 1);
  }
  function decreasecount4() {
    setCount4(count4 - 1);
  }
  
const handleskip = () => {
  setskipques(!skipques)
}
return(
     <div className='BOX7'>
           
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleskip} />
    
      
        <h2 className='elec4'>Other activities</h2>
         <p className='q4'>Calculate the carbon footprint of other consumptions of your company.</p>
         <button className='R3'>calculate</button>
      
<>

      <p className='s4'>BCO2: </p>
      <h1 className='COUNT3'>{count4}</h1>
       <div className='BOX8'>
        <button className = 'btn1' onClick={decreasecount4}>-</button>
        <button className = 'btn2' onClick={increasecount4}>+</button>
           <p className='countryheadingcomp4'>Select Your country: </p>
           
      
       </div>
</>
      
      </div> 
      
      </div>
);
};

export default Menu4;