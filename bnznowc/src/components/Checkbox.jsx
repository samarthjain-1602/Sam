import React, { useState } from 'react';

const Checkbox = ({className}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label >
      <input className={className}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      
    </label>
  );
};

export default Checkbox;