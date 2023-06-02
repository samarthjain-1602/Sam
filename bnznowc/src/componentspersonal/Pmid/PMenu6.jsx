import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';

function PMenu6(){




 

const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);
 const [count4, setCount4] = useState(0);
  const [selectedTrip, setSelectedTrip] = useState('');
  const trips = ['','USA', 'India', 'UK', 'Australia'];

  const handleTripTypeChange = (event) => {
    setSelectedTrip(event.target.value);
  };

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
 
 
 
const[skipques, setskipques] = useState(false);

const handleSkip = () => {
  setskipques(!skipques)
}


  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='skip4' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='PBOX6'>
      
        
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
      
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
     
        <h2 className='pelec5'>Trips</h2>
         <p className='pq6'>Introduce the yearly trips you do, both for leisure and work.</p>
     
<>   
<div className='B1'>
<p className='ps1e'>Yearly short haul flights (less than 3h) : </p>
      <h1 className='pCOUNT1e'>{count1}</h1>
      
        <button className = 'pbtn1e' onClick={decreasecount1}>-</button>
        <button className = 'pbtn2e' onClick={increasecount1}>+</button>

      <p className='ps2e'>Yearly long haul flights (more than 3h) : </p>
      <h1 className='pCOUNT2e'>{count2}</h1>
      <button className = 'pbtn3e' onClick={decreasecount2}>-</button>
      <button className = 'pbtn4e' onClick={increasecount2}>+</button>

      <p className='ps3e'>Yearly total nights stayed in a hotel : </p>
      <h1 className='pCOUNT3e'>{count3}</h1>
      <button className = 'pbtn5e' onClick={decreasecount3}>-</button>
      <button className = 'pbtn6e' onClick={increasecount3}>+</button>

      <p className='ps4e'>Average star rating of your hotel stays : </p>
      <h1 className='pCOUNT4e'>{count4}</h1>
      <button className = 'pbtn7e' onClick={decreasecount4}>-</button>
      <button className = 'pbtn8e' onClick={increasecount4}>+</button>
  
      
      <button className='continue5'>Continue</button>

</div>
    
  <p className='tripheading1'>Enter main trip destination: </p>
      <DropdownList className={'trip1'}
      options={trips}
        selectedOption={selectedTrip}
        onOptionChange={handleTripTypeChange}
        />

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu6;
