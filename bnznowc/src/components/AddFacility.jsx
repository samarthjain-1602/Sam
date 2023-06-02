import React, { useState } from 'react';
import DropdownMenu from './dropdown';


function Facility() {
  const [facilities, setFacilities] = useState([]);

  function addFacility() {
    setFacilities([...facilities, { count: 0 }]);
  }

  function increaseCount(index) {
    setFacilities(prevFacilities => {
      const updatedFacilities = [...prevFacilities];
      updatedFacilities[index].count += 1;
      return updatedFacilities;
    });
  }

  function decreaseCount(index) {
    setFacilities(prevFacilities => {
      const updatedFacilities = [...prevFacilities];
      if (updatedFacilities[index].count > 0) {
        updatedFacilities[index].count -= 1;
      }
      return updatedFacilities;
    });
  }

  return (
    <div>
      {facilities.map((facility, index) => (
        <div key={index} className="facility">
          <p className="s1">Enter Kw/h :</p>
          <h1 className="COUNT">{facility.count}</h1>
          <div className="BOX2">
            <button className="btn1" onClick={() => decreaseCount(index)}>
              -
            </button>
            <button className="btn2" onClick={() => increaseCount(index)}>
              +
            </button>
          </div>
          <DropdownMenu />
        </div>
      ))}
      <button onClick={addFacility}>Add Facility</button>
    </div>
  );
}

export default Facility;
