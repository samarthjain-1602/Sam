import React from 'react';

const DropdownList = ({ options, selectedOption, onOptionChange, className }) => {
  return (
    <div style={{ maxHeight: '200px', overflow: 'auto'}}>
      <select className={className} value={selectedOption} onChange={onOptionChange}>
        {options.map((option, index) => (
          <option key={index} value={option} style={{ borderBottom: '1px white', backgroundColor: option === selectedOption ? 'black' : 'black', color: option === selectedOption ? '#52F40D' : '#52F40D' }}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownList;


/* 
import React, { useState } from 'react';
import DropdownList from './DropdownList';

const MyPage = () => {
  const [selectedTrip, setSelectedTrip] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedFuelType, setSelectedFuelType] = useState('');
  const [selectedTransportType, setSelectedTransportType] = useState('');
  const [selectedDietType, setSelectedDietType] = useState('');
  const [selectedEmission, setSelectedEmissionType] = useState('');
  const [selectedSize, setSelectedSizeType] = useState('');
  const [selectedMode, setSelectedModeType] = useState('');
  const [selectedFlight, setSelectedFlightType] = useState('');
  const [selecteddepAirport, setSelectedDepAirport] = useState('');
  const [selectedarrAirport, setSelectedArrAirport] = useState('');
  const [selectedClass, selSelectedClass] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedGasType, setSelectedGasType] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [selectedCapacity, setSelecteddCapaity] = useSate('');
  

  const capacity = ['', '25 kva', '30 Kva', '40 Kva', '50 Kva', '100 Kva'];
  const vehicle = ['', 'LDV', 'MDV'];
  const gas = ['R-22', 'R-134Q', 'R-410A'];
  const car = ['Sedan', 'Hatchback', 'SUV'];
  const company = ['Resort', 'Hospital', 'IT', 'bank'];
  const trips = ['USA', 'India', 'UK', 'Australia'];
  const countries = ['USA', 'India', 'UK', 'Australia'];
  const fuelTypes = ['Gasoline', 'Diesel', 'Electric', 'Petrol'];
  const transportTypes = ['Car', 'Bus', 'Train', 'Bicycle'];
  const dietTypes = ['Vegetarian', 'Vegan', 'Omnivore'];
  const emissionTypes = [Hydrogen, Biofuels, Propane, Natural Gas];
  const size = ['','Small','Medium','Large'];
  const Mode = ['',City Road with car, City road with Bus, Flight, Train];
  const Flight = ['', 'Commercial', 'charter', 'Domestic', 'International', 'Non-stop', 'Cargo', 'Connecting'];
  const Airport = ['', 'Chattrapati Shivaji', 'Heathrow', 'John F kennedy', 'Changi', 'Indira Gandhi', 'DXB'];
  const Class = ['','First Class', 'Business Class', 'Economy Class'];
 
  const handleCapacityType = (event) => {
    setSelectedVehicle(event.target.value);
  };

  const handleVehicleType = (event) => {
    setSelectedVehicle(event.target.value);
  };

  const handleGasType = (event) => {
    setSelectedGasType(event.target.value);
  };

  const handleCarType = (event) => {
    setSelectedCar(event.target.value);
  };

  const handleCompanyType = (event) => {
    setSelectedCompany(event.target.value);
  };

  const handleFlightChange = (event) => {
    setSelectedFlightType(event.target.value);
  };

  const handleDAirportType = (event) => {
    setSelectedDepAirport(event.target.value);
  };

 const handleAAirportType = (event) => {
    setSelectedDArrAirport(event.target.value);
  };

  const handleClassType = (event) => {
    setSelectedClass(event.target.value);
  };
 


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleFuelTypeChange = (event) => {
    setSelectedFuelType(event.target.value);
  };

  const handleTransportTypeChange = (event) => {
    setSelectedTransportType(event.target.value);
  };

  const handleDietTypeChange = (event) => {
    setSelectedDietType(event.target.value);
  };

  const handleEmissionTypeChange = (event) => {
    setSelectedEmissionType(event.target.value);
  };

  const handleTripTypeChange = (event) => {
    setSelectedTripType(event.target.value);
  };

  const handleSizeTypeChange = (event) => {
    setSelectedSizeType(event.target.value);
  };
  
  const handleModeTypeChange = (event) => {
    setSelectedModeType(event.target.value);
  };
  


  return (
    <div>
      <h1>My Page</h1>
       <DropdownList 
       options={capacity}
       selectedOption={selectedCapacityType}
       onOptionChange={handleType}
       />
      <DropdownList 
       options={vehicle}
       selectedOption={selectedVehicleType}
       onOptionChange={handleVehicleType}
       />
      <DropdownList 
       options={gas}
       selectedOption={selectedGasType}
       onOptionChange={handleGasType}
       />
      <DropdownList 
       options={car}
       selectedOption={selectedCar}
       onOptionChange={handleCarType}
       />
       <DropdownList 
       options={company}
       selectedOption={selectedCompany}
       onOptionChange={handleCompanyType}
       />
       <DropdownList
        options={Flight}
        selectedOption={selectedFlight}
        onOptionChange={handleFlightChange}
      />
       <DropdownList
        options={Airport}
        selectedOption={selecteddepAirport}
        onOptionChange={handleDAirportType}
      />
       <DropdownList
        options={Airport}
        selectedOption={selectedArrAirport}
        onOptionChange={handleAAirportType}
      />
       <DropdownList
        options={Class}
        selectedOption={selectedClass}
        onOptionChange={handleClassType}
      />
      <DropdownList
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
      <DropdownList
        options={fuelTypes}
        selectedOption={selectedFuelType}
        onOptionChange={handleFuelTypeChange}
      />
      <DropdownList
        options={transportTypes}
        selectedOption={selectedTransportType}
        onOptionChange={handleTransportTypeChange}
      />
      <DropdownList
        options={dietTypes}
        selectedOption={selectedDietType}
        onOptionChange={handleDietTypeChange}
      />
      <DropdownList 
        options={emissionTypes}
        selectedOption=={selectedEmission}
        onOptionChange={handleEmissionTypeChange}
      />
      <DropdownList
      options={trips}
        selectedOption=={selectedTrip}
        onOptionChange={handleTripTypeChange}
        />
      <DropdownList 
      options={size}
       selectedOption={selectedSize}
       onoptionChange={handleSizeTypeChange}
        />
        <DropdownList
        options={Mode}
        selectedOption={selectedMode}
        onOptionChange={handleModeTypeChange}
      />
    </div>
  );
};

export default MyPage;

*/