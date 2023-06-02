import React, { useState } from 'react';
import DropdownList from '../../components/DropdownList';
import Checkbox from '../../components/Checkbox';

function PMenu2(){




 
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(0);
 const [count3, setCount3] = useState(0);
 const [count4, setCount4] = useState(0);
 const [count5, setCount5] = useState(0);
 const [count6, setCount6] = useState(0);
 const [count7, setCount7] = useState(0);

  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedEmission, setSelectedEmissionType] = useState('');
  const countries = ['',
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"];
  const emissionTypes = ['', 'Biofuels', 'Propane', 'NaturalGas'];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

   const handleEmissionTypeChange = (event) => {
    setSelectedEmissionType(event.target.value);
  }


 
 


  
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
  function increasecount2() {
    setCount2(count2 + 1);
  }
  function decreasecount2() {
    setCount2(count2 - 1);
  }
  function increasecount3() {
    setCount3(count3 + 1);
  }
  function decreasecount3() {
    setCount3(count3 - 1);
  }
  function increasecount4() {
    setCount4(count4 + 1);
  }
  function decreasecount4() {
    setCount4(count4 - 1);
  }
  function increasecount5() {
    setCount5(count5 + 1);
  }
  function decreasecount5() {
    setCount5(count5 - 1);
  }
  function increasecount6() {
    setCount6(count6 + 1);
  }
  function decreasecount6() {
    setCount6(count6 - 1);
  }
  function increasecount7() {
    setCount7(count7 + 1);
  }
  function decreasecount7() {
    setCount7(count7 - 1);
  }

  /* SKIP BUTTON */
function SkipButton({ onClick }) {
    return (
      <button className='skip1' onClick={onClick}>
        Skip
      </button>
    );
  }

  return (
         <div className='PBOX2'>
      
        
      
        <h2>Box Content</h2>
        <p>This is the content of the box.</p>
      
      <div>
      {/* Other components */}
      <SkipButton onClick={handleSkip} />
    
      

        <h2 className='pelec'>Home</h2>
         <p className='pq2'>Introduce home members, pets owned, and electric and other fuel consumptions.</p>
      
<>   
<div className='B1'>
  <p className='ps1a'>No. of Home members: </p>
      <h1 className='pCOUNT1a'>{count1}</h1>
      
        <button className = 'pbtn1a' onClick={decreasecount1}>-</button>
        <button className = 'pbtn2a' onClick={increasecount1}>+</button>

      <p className='ps2a'>No. Of Dogs: </p>
      <h1 className='pCOUNT2a'>{count2}</h1>
      <button className = 'pbtn3a' onClick={decreasecount2}>-</button>
      <button className = 'pbtn4a' onClick={increasecount2}>+</button>
      <p className='recycle'>Do you recycle?</p>
      <Checkbox className={'checkbox'}/>
      

      <p className='ps3a'>No. of other Pets: </p>
      <h1 className='pCOUNT3a'>{count3}</h1>
      <button className = 'pbtn5a' onClick={decreasecount3}>-</button>
      <button className = 'pbtn6a' onClick={increasecount3}>+</button>

      <p className='ps4a'>No. of Cats: </p>
      <h1 className='pCOUNT4a'>{count4}</h1>
      <button className = 'pbtn7a' onClick={decreasecount4}>-</button>
      <button className = 'pbtn8a' onClick={increasecount4}>+</button>

      <hr className='hr1'></hr>

      <p className='ps5a'>Yearly electric consumption : </p>
      <h1 className='pCOUNT5a'>{count5} Kwh</h1>
      <button className = 'pbtn9a' onClick={decreasecount5}>-</button>
      <button className = 'pbtn10a' onClick={increasecount5}>+</button>
      
      <p className='ps6'>Percentage of renewable Energies: </p>
      <h1 className='pCOUNT6'>{count6} %</h1>
      <button className = 'pbtn11' onClick={decreasecount6}>-</button>
      <button className = 'pbtn12' onClick={increasecount6}>+</button>
    
    <hr className='hr2'></hr>

      <p className='ps7'>Volume(litres, Kg or Kwh): </p>
      <h1 className='pCOUNT7'>{count7} %</h1>
      <button className = 'pbtn13' onClick={decreasecount7}>-</button>
      <button className = 'pbtn14' onClick={increasecount7}>+</button>
      
      <hr className='hr3'></hr>
      <button className='continue1'>Continue</button>

</div>
    
  <p className='countryheading1'>Select Your country: </p>
      <DropdownList className={"Country1"}
        options={countries}
        selectedOption={selectedCountry}
        onOptionChange={handleCountryChange}
      />
   <p className='emissionheading1'>Other uel type emissions: </p>
      <DropdownList className={"Emission1"}
        options={emissionTypes}
        selectedOption={selectedEmission}
        onOptionChange={handleEmissionTypeChange}
      />

          
       
</>
      
      </div> 
      
     </div>
  );
};
export default PMenu2;
