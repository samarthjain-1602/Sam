/* import React, { useState } from 'react';

import DropdownList from './DropdownList';
import Facility from './AddFacility';


function PMenu1 () {
  
  
 const [count1, setCount1] = useState(0);
 const [selectedCountry, setSelectedCountry] = useState('');
 const countries = ['','USA', 'India', 'UK', 'Australia'];
   const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
 
  

  
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

  
function SkipButton({ onClick }) {
    return (
      <button className='skip' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='BOX1'>
      
      
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
      
      <div>
      
      <SkipButton onClick={handleSkip} />
    
     
        <h2 className='elec'>Electricity consumption</h2>
         <p className='q1'>Add the yearly electric consumption (Kw/h) of each of your company's facilities, selecting the country where is located and its 
electric provider or region if applies.</p>
<button className='R'>calculate</button>
      
<>
        <Facility />
      <p className='s1'>Enter Kw/h :</p>
      <h1 className='COUNT'>{count1}</h1>
       <div className='BOX2'>
        <button className = 'btn1' onClick={decreasecount1}>-</button>
        <button className = 'btn2' onClick={increasecount1}>+</button>
           <p className='countryheadingcomp1'>Select Your country: </p>
      <DropdownList className={"Countrycomp1"}
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
       </div>
</>
      
      </div> 
      
     </div>
  );
};  
export default PMenu1; */

import React, { useState } from 'react';
import DropdownList from './DropdownList';
import Facility from './AddFacility';

function PMenu1() {
  const [count1, setCount1] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [skipques, setSkipques] = useState(false);
  const countries = ['', 'USA', 'India', 'UK', 'Australia'];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  function increaseCount1() {
    setCount1(count1 + 1);
  }

  function decreaseCount1() {
    setCount1(count1 - 1);
  }
const handleSkip = () => {
    setSkipques(!skipques);
  };
  function calculateCarbonFootprint() {
    // Calculate carbon footprint based on the entered kWh count, country, and other factors
    // Replace this placeholder calculation with your own logic
    const carbonFootprint = count1 * 0.5; // Adjust the multiplier based on your calculation

    setCarbonFootprint(carbonFootprint);
  }

  /* SKIP BUTTON */
  function SkipButton({ onClick }) {
    return (
      <button className="skip" onClick={onClick}>
        Skip
      </button>
    );
  }
  

  return (
    <div className="BOX1">
      <h2>Box Content</h2>
      <p>This is the content of the box.</p>

      <div>
        {/* Other components */}
        <SkipButton onClick={handleSkip} />

        <h2 className="elec">Electricity consumption</h2>
        <p className="q1">
          Add the yearly electric consumption (Kw/h) of each of your company's facilities, selecting the country where
          it is located and its electric provider or region if applicable.
        </p>
        <button className="R" onClick={calculateCarbonFootprint}>
          Calculate
        </button>

        <Facility />
        <p className="s1">Enter Kw/h :</p>
        <h1 className="COUNT">{count1}</h1>
        <div className="BOX2">
          <button className="btn1" onClick={decreaseCount1}>
            -
          </button>
          <button className="btn2" onClick={increaseCount1}>
            +
          </button>
          <p className="countryheadingcomp1">Select Your country: </p>
          <DropdownList
            className={"Countrycomp1"}
            options={countries}
            selectedOption={selectedCountry}
            onOptionChange={handleCountryChange}
          />
        </div>

        {carbonFootprint > 0 && (
          <p className="carbonFootprint">Carbon Footprint: {carbonFootprint} kg</p>
        )}
      </div>
    </div>
  );
}

export default PMenu1;
