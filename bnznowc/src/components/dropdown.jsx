import React, { useState } from 'react';


/*Select country code */
 const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dropdown'>
    
      <h4 className='p3'>Select your Country :</h4>
      <button className='btn3' onClick={toggleMenu}><img className='vctr' src='/images/vector.svg'></img></button>
      {isOpen && (
        <ul className='countrylist'>
          <li>India</li>
          <li>United States Of America</li>
          <li>Australia</li>
          
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;