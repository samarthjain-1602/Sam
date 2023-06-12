import React, { useState } from 'react';

function IT() {
  const [count1, setCount1] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [electricityConsumption, setElectricityConsumption] = useState('');
  const [useRenewableEnergy, setUseRenewableEnergy] = useState(false);
  const [renewablePercentage, setRenewablePercentage] = useState('');
  const [hasDataCenter, setHasDataCenter] = useState(false);
  const [dataCenterConsumption, setDataCenterConsumption] = useState('');
  const [hasRecyclingProgram, setHasRecyclingProgram] = useState(false);
  const [recyclingPercentage, setRecyclingPercentage] = useState('');
  

  function increaseCount1() {
    setCount1(count1 + 1);
  }

  function decreaseCount1() {
    if (count1 === 0) {
      return; // Prevent decreasing below 0
    }
    setCount1(count1 - 1);
  }

  function handleCheckboxChange() {
    setShowInput(!showInput);
  }

  function handleElectricityChange(event) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setElectricityConsumption(value);
  }

  function handleRenewableCheckboxChange() {
    setUseRenewableEnergy(!useRenewableEnergy);
  }

  function handleRenewablePercentageChange(event) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setRenewablePercentage(value);
  }

  function handleDataCenterCheckboxChange() {
    setHasDataCenter(!hasDataCenter);
  }

  function handleDataCenterConsumptionChange(event) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setDataCenterConsumption(value);
  }

  function handleRecyclingCheckboxChange() {
    setHasRecyclingProgram(!hasRecyclingProgram);
  }

  function handleRecyclingPercentageChange(event) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setRecyclingPercentage(value);
  }

  return (
    <div>
      <p className='greydabba1'></p>
      <p className='blackdabba1'></p>
      <div className='IBOX0'>
       <img className= 'whitegola1' src='/images/white.png' alt='whitegola'></img>
      <img className= 'greengola1' src='/images/green.png' alt='greengolagola'></img>
       <h2 className='q5'>Fill in the information to know how much <span classname='q5a'style={{fontWeight: 'bold', color:'#52F40D'}}>BCO2</span>  you should <span classname='q5b'style={{fontWeight: 'bold', color:'#52F40D'}}>Balance</span> </h2>
            <h2 className='q6'>By using this <span style={{fontWeight: 'bold', color:'#52F40D'}}>calculator</span> you agree to our T&C of use.</h2>
            <h2 className='q7'>Register with BNZ now to know your carbon footprint in detail.</h2>
            <button className='menb1'>Log In</button>
            <button className='menb2'>Sign Up</button>
      </div>
      <div className='IBOX1'>
        <p className='line1'></p>
        <h3 className='scope'>Scope and boundaries</h3>
        <p className='area'>What is the total floor area of your office space?</p>
        <input
          className='meter'
          type='text'
          placeholder='in sq. m'
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />

        <p className='work'>How many employees work in your company?</p>
        <h1 className='ICOUNT1'>{count1}</h1>
        <button className='ibutton1' onClick={decreaseCount1}>-</button>
        <button className='ibutton2' onClick={increaseCount1}>+</button>

        <p className='remote'>Do you have any remote employees? If yes, how many?</p>
        <label>
          <input
            className='re'
            type='checkbox'
            checked={showInput}
            onChange={handleCheckboxChange}
          />
        </label>
        {showInput && (
          <input
            className='remote-input'
            type='text'
            placeholder=''
            onInput={(event) => {
              event.target.value = event.target.value.replace(/[^0-9]/g, '');
            }}
          />
        )}
          <button className='Icalculate1'>Calculate</button>
      </div>
    
      <div className='IBOX2'>
        <p className='line2'></p>
        <h3 className='ec'>Electricity consumption</h3>
        <p className='ec1'>What is your annual electricity consumption?</p>
        <input
          className='consume1'
          type='text'
          placeholder='in KWh'
          value={electricityConsumption}
          onChange={handleElectricityChange}
        />
        <p className='renew1'>Do you use renewable energy sources for your electricity consumption? If yes, specify the percentage.</p>
        <label>
          <input
            className='checkboxrenew'
            type='checkbox'
            checked={useRenewableEnergy}
            onChange={handleRenewableCheckboxChange}
          />
        </label>
        {useRenewableEnergy && (
          <input
            className='renewable-input'
            type='text'
            placeholder='in %'
            value={renewablePercentage}
            onChange={handleRenewablePercentageChange}
          />
        )}
        <p className='fuelconsume'>What is your annual fuel consumption for company vehicles?</p>
        <input
          className='annual-fuel'
          type='text'
          placeholder='in ltrs'
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />
        <p className='data-center'>Do you have any data centers? If yes, what is the annual energy consumption of your data centers?</p>
        <label>
          <input
            className='data-center-checkbox'
            type='checkbox'
            checked={hasDataCenter}
            onChange={handleDataCenterCheckboxChange}
          />
        </label>
        {hasDataCenter && (
          <input
            className='data-center-input'
            type='text'
            placeholder='in KWh'
            value={dataCenterConsumption}
            onChange={handleDataCenterConsumptionChange}
          />
        )}
           <button className='Icalculate2'>Calculate</button>
      </div>
   
      <div className='IBOX3'>
        <p className='line3'></p>
        <h3 className='busy'>Business Travel</h3>
        <p className='int'>How many international flights were taken by your employees?</p>
        <p className='specify1'>Specify the number</p>
        <input
          className='international-flight'
          type='text'
          placeholder=''
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />
        <p className='purpose'>What is the total distance traveled by your employees for business purposes?</p>

        <input
          className='distance-travel'
          type='text'
          placeholder='in kms'
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />
        <p className='domestic'>How many domestic flights were taken by your employees?</p>
        <p className='specify2'>Specify the number</p>
        <input
          className='domestic-flight'
          type='text'
          placeholder=''
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />
        <p></p>
        <button className='Icalculate3'>Calculate</button>
      </div>
      
      <div className='IBOX4'>
        <h3 className='waste'>Waste management</h3>
        <p className='line4'></p>
        <p className='paper-waste'>What is the weight of paper waste generated annually?</p>
        <input
          className='weight'
          type='text'
          placeholder='in Kgs'
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />
        <p className='recycling'>Do you have a recycling program in place? If yes, what percentage of your waste is recycled?</p>
        <label>
          <input
            className='recycling-checkbox'
            type='checkbox'
            checked={hasRecyclingProgram}
            onChange={handleRecyclingCheckboxChange}
          />
        </label>
        {hasRecyclingProgram && (
          <input
            className='recycling-input'
            type='text'
            placeholder='in %'
            value={recyclingPercentage}
            onChange={handleRecyclingPercentageChange}
          />
        )}
        <p className='electronic-waste'>What is the weight of electronic waste generated annually?</p>
        <input
          className='weight-waste'
          type='text'
          placeholder='in Kgs'
          onInput={(event) => {
            event.target.value = event.target.value.replace(/[^0-9]/g, '');
          }}
        />
        <button className='Icalculate4'>Calculate</button>
      </div>
      
    </div>
  );
}

export default IT;
