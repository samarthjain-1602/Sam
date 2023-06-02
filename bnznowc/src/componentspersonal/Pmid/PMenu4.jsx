import React, { useState } from 'react';
import DropdownMenu from '../../components/dropdown';

function PMenu4(){



 
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);
 const [count4, setCount4] = useState(0);
 const [count5, setCount5] = useState(0);
 const [count6, setCount6] = useState(0);
 
 
 

  
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
  function increasecount6() {
    setCount6(count6 + 1);
  }
  function decreasecount6() {
    setCount6(count6 - 1);
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
         <div className='PBOX4'>
      
       
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      

        <h2 className='pelec3'>Leisure</h2>
         <p className='pq4'>Introduce the number of clothes you purchase per month.</p>
    
<>   
<div className='B1'>
  <p className='ps1c'>Number of shoes: </p>
      <h1 className='pCOUNT1c'>{count1}</h1>
      
        <button className = 'pbtn1c' onClick={decreasecount1}>-</button>
        <button className = 'pbtn2c' onClick={increasecount1}>+</button>

      <p className='ps2c'>No. Of Tshirts: </p>
      <h1 className='pCOUNT2c'>{count2}</h1>
      <button className = 'pbtn3c' onClick={decreasecount2}>-</button>
      <button className = 'pbtn4c' onClick={increasecount2}>+</button>

      <p className='ps3c'>No. of Other clothes: </p>
      <h1 className='pCOUNT3c'>{count3}</h1>
      <button className = 'pbtn5c' onClick={decreasecount3}>-</button>
      <button className = 'pbtn6c' onClick={increasecount3}>+</button>

      <p className='ps4c'>No. of pants: </p>
      <h1 className='pCOUNT4c'>{count4}</h1>
      <button className = 'pbtn7c' onClick={decreasecount4}>-</button>
      <button className = 'pbtn8c' onClick={increasecount4}>+</button>

     

      <p className='ps5c'>Number of Shirts: </p>
      <h1 className='pCOUNT5c'>{count5} </h1>
      <button className = 'pbtn9c' onClick={decreasecount5}>-</button>
      <button className = 'pbtn10c' onClick={increasecount5}>+</button>
      
      <p className='ps6c'>What % of your 
purchases is second hand? </p>
      <h1 className='pCOUNT6c'>{count6} </h1>
      <button className = 'pbtn11c' onClick={decreasecount6}>-</button>
      <button className = 'pbtn12c' onClick={increasecount6}>+</button>
    
  

     
      <button className='continue3'>Calculate</button>

</div>
    

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu4;
