import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';

function PMenu7(){



 

const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedTransportType, setSelectedTransportType] = useState('');
  const countries = ['','USA', 'India', 'UK', 'Australia'];
  const fuelTypes = ['','Gasoline', 'Diesel', 'Electric', 'Petrol', 'CNG'];
  const transportTypes = ['','Car', 'Bus', 'Train', 'Bicycle', 'Flight','Metro'];

    const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleFuelTypeChange = (event) => {
    setSelectedFuelType(event.target.value);
  };

  const handleTransportTypeChange = (event) => {
    setSelectedTransportType(event.target.value);
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
      <button className='skip6' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='PBOX7'>
      
    
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      

        <h2 className='pelec6'>Transport</h2>
         <p className='pq7'>Introduce your usual mean of transportation. Fill both public and own if you use both.</p>
      
<>   
<div className='B1'>
<p className='ps1f'>Yearly distance driven(km): </p>
      <h1 className='pCOUNT1f'>{count1} km</h1>
      
        <button className = 'pbtn1f' onClick={decreasecount1}>-</button>
        <button className = 'pbtn2f' onClick={increasecount1}>+</button>

      <p className='ps2f'>Yearly distance driven(km): </p>
      <h1 className='pCOUNT2f'>{count2} km</h1>
      <button className = 'pbtn3f' onClick={decreasecount2}>-</button>
      <button className = 'pbtn4f' onClick={increasecount2}>+</button>

  
      
      <button className='continue6'>Continue</button>

</div>
    
  <p className='countryheading3'>Select Your country: </p>
      <DropdownList className={'country3'}
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
      <p className='private'>Private Transport</p>
      <p className='public'>Public Transport</p>

      <p className='fuelheading1'>Select Fuel Type: </p>
      <DropdownList className={'fuel1'}
        options={fuelTypes}
        selectedOption={selectedFuelType}
        onOptionChange={handleFuelTypeChange}
      />
      <hr className='line1'></hr>
      <hr className='line2'></hr>
      <p className='transportheading1'>Select transport type: </p>
      <DropdownList className={'transport1'}
        options={transportTypes}
        selectedOption={selectedTransportType}
        onOptionChange={handleTransportTypeChange}
        
      />

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu7;
