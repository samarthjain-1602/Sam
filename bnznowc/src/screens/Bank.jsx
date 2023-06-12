import React, { useState } from 'react';
import DropdownList  from '../components/DropdownList';


function Bank() {
  const [isOpen, setIsOpen] = useState({
    box1: { isOpen: false, question1: '', question2: '' },
    box2: { isOpen: false, question: '' },
    box3: { isOpen: false, question: '' }
  });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  const [count9, setCount9] = useState(0);
  const [count10, setCount10] = useState(0);

 function increasecount1() {
    setCount1(count1 + 1);
  }
  function decreasecount1() {
    if (count1 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount1(count1 - 1);
  }
  function increasecount2() {
    setCount2(count2 + 1);
  }
  function decreasecount2() {
    if (count2 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount2(count2 - 1);
  }
  function increasecount3() {
    setCount3(count3 + 1);
  }
  function decreasecount3() {
    if (count3 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount3(count3 - 1);
  }
  function increasecount4() {
    setCount4(count4 + 1);
  }
  function decreasecount4() {
    if (count4 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount4(count4 - 1);
  }
  function increasecount5() {
    setCount5(count5 + 1);
  }
  function decreasecount5() {
    if (count5 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount5(count5 - 1);
  }
   function increasecount6() {
    setCount6(count6 + 1);
  }
  function decreasecount6() {
    if (count6 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount6(count6 - 1);
  }
  function increasecount7() {
    setCount7(count7 + 1);
  }
  function decreasecount7() {
    if (count7 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount7(count7 - 1);
  }
   function increasecount8() {
    setCount8(count8 + 1);
  }
  function decreasecount8() {
    if (count8 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount8(count8 - 1);
  }
  function increasecount9() {
    setCount9(count9 + 1);
  }
  function decreasecount9() {
    if (count9 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount9(count9 - 1);
  }
   function increasecount10() {
    setCount10(count10 + 1);
  }
  function decreasecount10() {
    if (count10 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount10(count10 - 1);
  }

  const handleCheckboxChange = (box) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [box]: {
        isOpen: !prevState[box].isOpen,
        question1: prevState[box].isOpen ? '' : prevState[box].question1,
        question2: prevState[box].isOpen ? '' : prevState[box].question2
      }
    }));
  };

const handleQuestionChange = (box, question, event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, ''); // Remove non-digit characters
    setIsOpen((prevState) => ({
      ...prevState,
      [box]: {
        ...prevState[box],
        [question]: value
      }
    }));
  };

  const [selectedCar, setSelectedCar] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedGasType, setSelectedGasType] = useState('');
  const [selecteddepAirport, setSelectedDepAirport] = useState('');
  const [selectedarrAirport, setSelectedArrAirport] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');
  

  const capacity = ['', '25 kva', '30 Kva', '40 Kva', '50 Kva', '100 Kva'];
  const Airport = ['', 'Chattrapati Shivaji', 'Heathrow', 'John F kennedy', 'Changi', 'Indira Gandhi', 'DXB'];
  const vehicle = ['', 'LDV', 'MDV'];
  const gas = ['R-22', 'R-134Q', 'R-410A'];
  const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Petrol'];
  const car = ['','Sedan', 'Hatchback', 'SUV'];
  const handleCarType = (event) => {
    setSelectedCar(event.target.value);
  };
  const handleFuelTypeChange = (event) => {
    setSelectedFuelType(event.target.value);
  };

   const handleGasType = (event) => {
    setSelectedGasType(event.target.value);
  };
  const handleVehicleType = (event) => {
    setSelectedVehicle(event.target.value);
  };
  const handleDAirportType = (event) => {
    setSelectedDepAirport(event.target.value);
  };

 const handleAAirportType = (event) => {
    setSelectedArrAirport(event.target.value);
  };
    const handleCapacityType = (event) => {
    setSelectedVehicle(event.target.value);
  };



  return (
    <div >
    <p className='greydabba'></p>
    <p className='blackdabba'></p>
    <div className='RBOX0'>src = '/images/BNZ logo.png' alt='bnwnow'
      <img className= 'whitegola1' src='/images/white.png' alt='whitegola'></img>
      <img className= 'greengola1' src='/images/green.png' alt='greengolagola'></img>
       <h2 className='q5'>Fill in the information to know how much <span classname='q5a'style={{fontWeight: 'bold', color:'#52F40D'}}>BCO2</span>  you should <span classname='q5b'style={{fontWeight: 'bold', color:'#52F40D'}}>Balance</span> </h2>
            <h2 className='q6'>By using this <span style={{fontWeight: 'bold', color:'#52F40D'}}>calculator</span> you agree to our T&C of use.</h2>
            <h2 className='q7'>Register with BNZ now to know your carbon footprint in detail.</h2>
            <button className='menb1'>Log In</button>
            <button className='menb2'>Sign Up</button>
    </div>
    <div className='RBOX1'>
    
    <button className='next1'>Calculate</button>
    <p className='dabba0'></p>
    <h1 className='combustion'>Stationary Combustion</h1>
    <label>
        <input
          type="checkbox"
          checked={isOpen.box1.isOpen}
          onChange={() => handleCheckboxChange('box1')}
          className="checkbox-box1"
        />
           <span className="checkmark1"></span>
        <p className='DG'>Do you have a DG set?</p>
      </label>
      {isOpen.box1.isOpen && (
        <div className="boxbox1">
          <p className='capacitY' >Capacity: </p>
     <DropdownList className={'capa'}
       options={capacity}
       selectedOption={selectedCapacity}
       onOptionChange={handleCapacityType}
       />
          
          <p className='runtimE'>Runtime: </p>
          <h1 className='RCOUNT2'>{count2} Hrs</h1>
        <button className = 'Rbutton3' onClick={decreasecount2}>-</button>
        <button className = 'Rbutton4' onClick={increasecount2}>+</button>
        
        </div>
      )}
     
      
     
     <label>
        <input
          type="checkbox"
          checked={isOpen.box2.isOpen}
          onChange={() => handleCheckboxChange('box2')}
          className="checkbox-box2"
        />
           <span className="checkmark2"></span>
        <p className='boiler'>Do you have a boiler?</p>
      </label>
      {isOpen.box2.isOpen && (
        <div className="boxbox2">
          <p className='consume'>Gas consumption in SVG: </p>
          <h1 className='RCOUNT3'>{count3}</h1>
        <button className = 'Rbutton5' onClick={decreasecount3}>-</button>
        <button className = 'Rbutton6' onClick={increasecount3}>+</button>
          {/* Render additional content for Box 2 */}
        </div>
      )} 
      
     
     
      <label>
        <input
          type="checkbox"
          checked={isOpen.box3.isOpen}
          onChange={() => handleCheckboxChange('box3')}
          className="checkbox-box3"
        />
           <span className="checkmark3"></span>
       <p className='stove'>Do you have a canteen stove?</p> 
      </label>
      {isOpen.box3.isOpen && (
        <div className="boxbox3">
          <p className='cylinder'>Total no. of cylinders: </p>
          <h1 className='RCOUNT4'>{count4} </h1>
        <button className = 'Rbutton7' onClick={decreasecount4}>-</button>
        <button className = 'Rbutton8' onClick={increasecount4}>+</button>
          {/* Render additional content for Box 3 */}
        </div>
      )}
      </div>
      <div className='RBOX2'>
      <button className='next2'>Calculate</button>
       <p className='p'></p> 
       <h2 className='vehicle'>Company vehicle</h2>
       <div className='boxbox4'>
         <p className='totalveh'>Total no. of vehicles: </p>
          <h1 className='RCOUNT5'>{count5} </h1>
        <button className = 'Rbutton9' onClick={decreasecount5}>-</button>
        <button className = 'Rbutton10' onClick={increasecount5}>+</button>
       </div>
       <p className='typecar'>Type of the car: </p>
        <DropdownList className={'car'}
       options={car}
       selectedOption={selectedCar}
       onOptionChange={handleCarType}
       />
       <p className='fueloption'>Fuel option: </p>
       <DropdownList className={'fueltype'}
        options={fuelTypes}
        selectedOption={selectedFuelType}
        onOptionChange={handleFuelTypeChange}
      />
      <div>
        <input className='disttravelled'
           type='text'
           placeholder='Total distance travalled'
            onInput={(event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  }}
         />
      </div>
      <p className='km'>in km</p>
      </div>
      <div className='RBOX3'>
      <button className='next3'>Calculate</button>
      <h2 className='fugitive'>Fugitive leakage</h2>
      <p className='dabba1'></p>
      <p className='refill'>Gas Refill quantity: </p>
       <DropdownList className={'gas'}
       options={gas}
       selectedOption={selectedGasType}
       onOptionChange={handleGasType}
       />
     <p className='fug'>Value: </p>
<input
  className='leakage'
  type='text'
  maxLength={5}
  placeholder=''
  onInput={(event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '').slice(0, 5);
  }}
/>



      </div>
      <div className='RBOX4'>
      <button className='next4'>Calculate</button>
        <p className='dabba2'></p>
        <h2 className='electricity'>Electricty</h2>
        <p className='ee'>Total unit consumed: </p>
        <h1 className='RCOUNT6'>{count6} </h1>
       <button className = 'Rbutton11' onClick={decreasecount6}>-</button>
        <button className = 'Rbutton12' onClick={increasecount6}>+</button>
         <p className='purchased'>Renewable electricity purchased: </p>
         <h1 className='RCOUNT7'>{count7} </h1>
       <button className = 'Rbutton13' onClick={decreasecount7}>-</button>
        <button className = 'Rbutton14' onClick={increasecount7}>+</button>
      </div>
      <div className='RBOX5'>
      <button className='next5'>Calculate</button>
        <p className='dabba3'></p>
        <h2 className='transport'>Transportation</h2>
        <p className='trips'>Average no. of trips per month: </p>
        <h1 className='RCOUNT8'>{count8} </h1>
       <button className = 'Rbutton15' onClick={decreasecount8}>-</button>
        <button className = 'Rbutton16' onClick={increasecount8}>+</button>
         <p className='dist'>Average distance in km: </p>
         <h1 className='RCOUNT9'>{count9} </h1>
       <button className = 'Rbutton17' onClick={decreasecount9}>-</button>
        <button className = 'Rbutton18' onClick={increasecount9}>+</button>
         <p className='typevehicle'>Types of vehicle: </p>
         <DropdownList className={'vehicle1'}
       options={vehicle}
       selectedOption={selectedVehicle}
       onOptionChange={handleVehicleType}
       />
      </div>
      <div className='RBOX6'>
      <button className='next6'>Calculate</button>
        <p className='dabba4'></p>
        <h2 className='employeeheading'>Employee vehicle</h2>
        <h3 className='personalcomm'>Personal commuting</h3>
        <p className='avgdistance'>Average distance for two wheeler: </p>
        <h1 className='RCOUNT10'>{count10} </h1>
       <button className = 'Rbutton19' onClick={decreasecount10}>-</button>
        <button className = 'Rbutton20' onClick={increasecount10}>+</button>
        <p className='avgdistance2'>Average distance for car: </p>
        <input className='avgdist2'
           type='text'
           placeholder=' Value'
         />
         <h3 className='companyveh'>Company vehicle</h3>
         <p className='totaltrips'>Total no. of trips: </p>
         <input className='totaltrips1'
           type='text'
           placeholder=' Value'
         />
         <hr className='hr10'></hr>
         <p className='contract'>Average distance on contract bus: </p>
         <input className='contract1'
           type='text'
           placeholder=' Value'
         />
      </div>
      <div className='RBOX7'>
      <button className='next7'>Calculate</button>
        <p className='dabba5'></p>
        <h2 className='business'>Business travel</h2>
        <h1 className='hiredheading'>Hired car  </h1>
        <p className='travelkm'>Total Travel in km: </p>
         <input className='travelkm1'
           type='text'
           placeholder=' Value'
         />
         <p className='hired'>Type of hired car: </p>
        <DropdownList className={'hiredcar'}
       options={car}
       selectedOption={selectedCar}
       onOptionChange={handleCarType}
       />
       <p className='typefuel'>Fuel type: </p>
       <DropdownList className={'hiredfuel'}
        options={fuelTypes}
        selectedOption={selectedFuelType}
        onOptionChange={handleFuelTypeChange}
      />
      <h1 className='airtravel'>Air travel</h1>
      <p className='stationfrom'>Station from: </p>
      <DropdownList className={'travelfrom'}
        options={Airport}
        selectedOption={selecteddepAirport}
        onOptionChange={handleDAirportType}
      />
      <p className='stationto'>Station to: </p>
       <DropdownList className={'travelto'}
        options={Airport}
        selectedOption={selectedarrAirport}
        onOptionChange={handleAAirportType}
      />
      </div>
      
     </div>
  );
}

export default Bank;
