import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';

function TMenu1(){




 

const [count1, setCount1] = useState(0);
 
  const [selectedFlight, setSelectedFlightType] = useState('');
  const [selecteddepAirport, setSelectedDepAirport] = useState('');
  const [selectedarrAirport, setSelectedArrAirport] = useState('');
  const [selectedClass, selSelectedClass] = useState('');
  const Flight = ['', 'Commercial', 'charter', 'Domestic', 'International', 'Non-stop', 'Cargo', 'Connecting'];
  const Airport = ['', 'Chattrapati Shivaji', 'Heathrow', 'John F kennedy', 'Changi', 'Indira Gandhi', 'DXB'];
  const Class = ['','First Class', 'Business Class', 'Economy Class'];
  

     const handleFlightChange = (event) => {
    setSelectedFlightType(event.target.value);
  };

  const handleDAirportType = (event) => {
    setSelectedDepAirport(event.target.value);
  };

 const handleAAirportType = (event) => {
    setSelectedArrAirport(event.target.value);
  };

  const handleClassType = (event) => {
    selSelectedClass(event.target.value);
  };

function increasecount1() {
    setCount1(count1 + 1);
  }
  function decreasecount1() {
    setCount1(count1 - 1);
  }
  

 

  
const[skipques, setskipques] = useState(false);

const handleSkip = () => {
  setskipques(!skipques)
}


  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='SKIP1' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='TBOX1'>
      <p className='block1'></p>
      <img className= 'vector1' src='/images/Flight.svg' alt='flt'></img>
        
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      

        <h2 className='Head1'>Your Flight</h2>
         <p className='subhead1'>Calculation of the carbon footprint for commercial aircraft.</p>
         <p className='subhead2'>Service to calculate the carbon footprint of a commercial aircraft for a specific number of passengers and a precalculated specific distance between
2 airports defined by IATA codes.</p>
      
<>   
<div className='B1'>
<p className='passengers1'>No. Of passengers: </p>
      <h1 className='TCOUNT1'>{count1} </h1>
      
        <button className = 'Tbutton1' onClick={decreasecount1}>-</button>
        <button className = 'Tbutton2' onClick={increasecount1}>+</button>

      
      <button className='calculate1'>Calculate</button>
      <button className='anotherflight'>Add another flight</button>
      <hr className='break1'></hr>
      
      

</div>
    <p className='heading1'>Select type of your flight: </p>
 <DropdownList className={'Flight'}
        options={Flight}
        selectedOption={selectedFlight}
        onOptionChange={handleFlightChange}
      />
      <p className='heading2'>Enter departure Airport: </p>
       <DropdownList className={'DepAirport'}
        options={Airport}
        selectedOption={selecteddepAirport}
        onOptionChange={handleDAirportType}
      />
      <p className='heading3'>Enter Arrival Airport: </p>
       <DropdownList className={'ArrAiport'}
        options={Airport}
        selectedOption={selectedarrAirport}
        onOptionChange={handleAAirportType}
      />
      <p className='heading4'>Enter type of class: </p>
       <DropdownList className={'Class'}
        options={Class}
        selectedOption={selectedClass}
        onOptionChange={handleClassType}
      />

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default TMenu1;
