import React, { useState } from 'react';
import DropdownList from './DropdownList';

function Menu2 (){

   const [selectedSize, setSelectedSizeType] = useState('');
   const size = ['','Small','Medium','Large'] 
  const handleSizeTypeChange = (event) => {
    setSelectedSizeType(event.target.value);
  };
  
   
   const [count2, setCount2] = useState(0);
   const[skipques, setskipques] = useState(false);
 
  /* SKIP BUTTON */
function SkipButton({ onClick }) {
  return (
    <button className='skip'onClick={onClick}>Skip</button>
  );
}

   
  function increasecount2(){
    setCount2(count2 + 1);
  }
  function decreasecount2() {
    setCount2(count2 - 1);
  }
  
const handleskip = () => {
  setskipques(!skipques)
}
return(
    <div className='BOX3'>
         
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
     
      <div>
      {/* Other components */}
      <SkipButton onClick={handleskip} />
    
      
        <h2 className='elec1'>Employees Commuting</h2>
         <p className='q2'>Add the number of employees working on each of your company's facilities, selecting the country where is located and its size 
(small up to 10,000 population, medium from 10,000 to 100,000 and large more than 100,000).</p>
<button className='R2'>calculate</button>
      
<>

      <p className='s2'>No. Of employees: </p>
      <h1 className='COUNT1'>{count2}</h1>
       <div className='BOX4'>
        <button className = 'btnd' onClick={decreasecount2}>-</button>
        <button className = 'btni' onClick={increasecount2}>+</button>
           <p className='sizeheading1'>Size :</p>
            <DropdownList className={'size1'}
      options={size}
       selectedOption={selectedSize}
       onoptionChange={handleSizeTypeChange}
        />
       </div>
</>
      
      </div> 
      
     </div>
 );
};
export default Menu2;
