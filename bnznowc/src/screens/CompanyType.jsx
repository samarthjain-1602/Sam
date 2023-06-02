import React, { useState } from 'react';
import DropdownList from '../components/DropdownList';
import { useNavigate } from 'react-router-dom';

function CompanyType(){
  const [selectedCompany, setSelectedCompany] = useState('');
  const navigate = useNavigate();
  const company = ['','Resort', 'Hospital', 'IT', 'Financial'];
  
   const handleCompanyType = (event) => {
    setSelectedCompany(event.target.value);
    navigate(`/${event.target.value}`)
  };



    return(
        <div>
        <p className='gradient'></p>
<div className='Companybox'>
    <h2 className='Companyheading'>Select your company type</h2>
    <DropdownList className='companytype'
       options={company}
       selectedOption={selectedCompany}
       onOptionChange={handleCompanyType}
       />
       <button className='others'>Other questions</button>
</div> 
        </div>

      
    )

}

export default CompanyType;