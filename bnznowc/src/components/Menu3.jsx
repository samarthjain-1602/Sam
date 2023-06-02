import React, { useState } from 'react';
import DropdownList from './DropdownList';


function Menu3(){
  

     const [selectedMode, setSelectedModeType] = useState('');
     const Mode = ['','City Road with car', 'City road with Bus', 'Flight', 'Train']
     const handleModeTypeChange = (event) => {
    setSelectedModeType(event.target.value);
  };
  
  const [count3, setCount3] = useState(0);
  const[skipques, setskipques] = useState(false);
   

  /* SKIP BUTTON */
function SkipButton({ onClick }) {
  return (
    <button className='skip'onClick={onClick}>Skip</button>
  );
}
  
   function increasecount3(){
    setCount3(count3 + 1);
  }
  function decreasecount3() {
    setCount3(count3 - 1);
  }
  
const handleskip = () => {
  setskipques(!skipques)
}
return(
     <div className='BOX5'>
     
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleskip} />
    
      
        <h2 className='elec3'>Business trips</h2>
         <p className='q3'>Calculate the carbon footprint of your business trips.</p>
         <button className='R3'>calculate</button>
      
<>

      <p className='s3'>Amount :</p>
      <h1 className='COUNT2'>{count3}</h1>
       <div className='BOX6'>
        <button className = 'btn1' onClick={decreasecount3}>-</button>
        <button className = 'btn2' onClick={increasecount3}>+</button>
          
           <p className='modeheading1'>Mode Type :</p>
           <DropdownList className={'Mode1'}
        options={Mode}
        selectedOption={selectedMode}
        onOptionChange={handleModeTypeChange}
      />
      
       </div>
</>
      
      </div> 
      
      </div>
);
};

export default Menu3;