import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';

function PMenu5(){




 


  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDietType, setSelectedDietType] = useState('');
  const countries = ['','USA', 'India', 'UK', 'Australia'];
  const dietTypes = ['','Vegetarian', 'Vegan', 'Omnivore'];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

    const handleDietTypeChange = (event) => {
    setSelectedDietType(event.target.value);
  };

  
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
         <div className='PBOX5'>
      
        
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      
        <h2 className='pelec4'>Nutrition</h2>
         <p className='pq5'>Introduce Your nutrition Habits</p>
      
<>   
<div className='B1'>
  
      
      <button className='continue4'>Continue</button>

</div>
    
  <p className='countryheading2'>Select Your country: </p>
      <DropdownList className={"Country2"}
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
   <p className='dietheading1'>Select your diet type: </p>
      <DropdownList className={"Diet1"}
        
        options={dietTypes}
        selectedOption={selectedDietType}
        onOptionChange={handleDietTypeChange}
      />

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu5;
