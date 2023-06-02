import React, { useState } from 'react';


function PMenu3(){



 
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 
 
 


  
const[skipques, setskipques] = useState(false);

const handleSkip = () => {
  setskipques(!skipques)
}

 function increasecount1() {
    setCount1(count1 + 1);
  }
  function decreasecount1() {
    setCount1(count1 - 1);
  }
  function increasecount2() {
    setCount2(count2 + 1);
  }
  function decreasecount2() {
    setCount2(count2 - 1);
  }


  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='skip3' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='PBOX3'>
      
      
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
     

        <h2 className='pelec1'>Internet</h2>
         <p className='pq3'>Introduce your internet usage per day.</p>
     
<>   
<div className='B1'>
  <p className='ps1b'>Daily Hrs of leisure: </p>
      <h1 className='pCOUNT1b'>{count1} hours</h1>
      
        <button className = 'pbtn1b' onClick={decreasecount1}>-</button>
        <button className = 'pbtn2b' onClick={increasecount1}>+</button>

      <p className='ps2b'>Daily Hours of Work: </p>
      <h1 className='pCOUNT2b'>{count2} hours</h1>
      <button className = 'pbtn3b' onClick={decreasecount2}>-</button>
      <button className = 'pbtn4b' onClick={increasecount2}>+</button>

     
      <button className='continue2'>Calculate</button>

</div>
    
  

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu3;
