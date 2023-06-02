import React, { useState } from 'react';






function PMenu1 () {
  
 
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);
 const [count4, setCount4] = useState(0);
 const [count5, setCount5] = useState(0);
 
 
  

  
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
  function increasecount3() {
    setCount3(count3 + 1);
  }
  function decreasecount3() {
    setCount3(count3 - 1);
  }
  function increasecount4() {
    setCount4(count4 + 1);
  }
  function decreasecount4() {
    setCount4(count4 - 1);
  }
  function increasecount5() {
    setCount5(count5 + 1);
  }
  function decreasecount5() {
    setCount5(count5 - 1);
  }

  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='skip' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='PBOX1'>
      
       
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
    
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      
        <h2 className='pelec'>Devices</h2>
         <p className='pq1'>Enter the number of electronic devices you have</p>
      
<>   
<div className='B1'>
  <p className='ps1'>No. of Computers :</p>
      <h1 className='pCOUNT1'>{count1}</h1>
      
        <button className = 'pbtn1' onClick={decreasecount1}>-</button>
        <button className = 'pbtn2' onClick={increasecount1}>+</button>

      <p className='ps2'>No. of tablets: </p>
      <h1 className='pCOUNT2'>{count2}</h1>
      <button className = 'pbtn3' onClick={decreasecount2}>-</button>
      <button className = 'pbtn4' onClick={increasecount2}>+</button>

      <p className='ps3'>No. of smartphones: </p>
      <h1 className='pCOUNT3'>{count3}</h1>
      <button className = 'pbtn5' onClick={decreasecount3}>-</button>
      <button className = 'pbtn6' onClick={increasecount3}>+</button>

      <p className='ps4'>No. of Routers: </p>
      <h1 className='pCOUNT4'>{count4}</h1>
      <button className = 'pbtn7' onClick={decreasecount4}>-</button>
      <button className = 'pbtn8' onClick={increasecount4}>+</button>

      <p className='ps5'>No. of laptops/notebooks: </p>
      <h1 className='pCOUNT5'>{count5}</h1>
      <button className = 'pbtn9' onClick={decreasecount5}>-</button>
      <button className = 'pbtn10' onClick={increasecount5}>+</button>
      <button className='continue'>Continue</button>
</div>
    
      

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu1;
