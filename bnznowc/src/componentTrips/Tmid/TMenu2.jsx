import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';

function TMenu2(){




 

const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedFlight, setSelectedFlightType] = useState('');
  
  const Flight = ['', 'Commercial', 'charter', 'Domestic', 'International', 'Non-stop', 'Cargo', 'Connecting'];
  const countries = ['USA', 'India', 'UK', 'Australia'];
  
  

     const handleFlightChange = (event) => {
    setSelectedFlightType(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
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

 
  
  
const[skipques, setskipques] = useState(false);

const handleSkip = () => {
  setskipques(!skipques)
}


  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='SKIP2' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='TBOX2'>
      <p className='block2'></p>
      <img className= 'vector2' src='/images/travel.svg' alt='flt'></img>
        
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      

        <h2 className='Head2'>Your travel in car</h2>
         <p className='subhead3'>Calculator for motorized road vehicles.</p>
         
      
<>   
<div className='B1'>
<p className='distance1'>Distance in Km: </p>
      <h1 className='TCOUNT2'>{count1} km</h1>
      
        <button className = 'Tbutton3' onClick={decreasecount1}>-</button>
        <button className = 'Tbutton4' onClick={increasecount1}>+</button>

        <p className='passengers2'>No. Of passengers: </p>
       <h1 className='TCOUNT3'>{count2} </h1>
      
        <button className = 'Tbutton5' onClick={decreasecount2}>-</button>
        <button className = 'Tbutton6' onClick={increasecount2}>+</button>

      
      <button className='calculate2'>Calculate</button>
      
      
      

</div>
    <p className='heading5'>Select type of your flight: </p>
 <DropdownList className={'Flight2'}
        options={Flight}
        selectedOption={selectedFlight}
        onOptionChange={handleFlightChange}
      />
      <p className='heading6'>select your country:  </p>
      <DropdownList className={'COUNTRY1'}
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
     

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default TMenu2;
