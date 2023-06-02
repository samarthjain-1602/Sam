import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';

function TMenu3(){




 

const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);
const [count3, setCount3] = useState(0);

  const [selectedCountry, setSelectedCountry] = useState('');

  
  
  const countries = ['USA', 'India', 'UK', 'Australia'];
  

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
  function increasecount3() {
    setCount3(count3 + 1);
  }
  function decreasecount3() {
    setCount3(count3 - 1);
  }
  
 
  

  
const[skipques, setskipques] = useState(false);

const handleSkip = () => {
  setskipques(!skipques)
}


  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='SKIP3' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='TBOX3'>
        
      <p className='block3'></p>
      <img className= 'vector3' src='/images/hotel.svg' alt='flt'></img>
       
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      

        <h2 className='Head3'>Your hotel stay</h2>
         <p className='subhead4'>Specific calculations for hotel stays</p>
         
      
<>   
<div className='B1'>
<p className='stars'>No. Of Stars:  </p>
      <h1 className='TCOUNT4'>{count1} </h1>
      
        <button className = 'Tbutton7' onClick={decreasecount1}>-</button>
        <button className = 'Tbutton8' onClick={increasecount1}>+</button>

        <p className='days'>No. Of Days: </p>
       <h1 className='TCOUNT5'>{count2} </h1>
      
        <button className = 'Tbutton9' onClick={decreasecount2}>-</button>
        <button className = 'Tbutton10' onClick={increasecount2}>+</button>

        <p className='rooms'>No. Of Rooms: </p>
       <h1 className='TCOUNT6'>{count3} </h1>
      
        <button className = 'Tbutton11' onClick={decreasecount3}>-</button>
        <button className = 'Tbutton12' onClick={increasecount3}>+</button>

      
      <button className='calculate3'>Calculate</button>
      
      
      

</div>
    
      <p className='heading7'>select your country:  </p>
      <DropdownList className={'COUNTRY2'}
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
     

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default TMenu3;
