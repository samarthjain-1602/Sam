import react from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './Design.css' 
import './Design1.css'
import './Design2.css'
import './Design3.css'
import './Design4.css'
import Landing from './components/Landing';
import Compapnycalc from './screens/CompanyCalc';
import PersonalCalc from './screens/PersonalCalc';
import TripsCalc from './screens/TripsCalc';
import CompanyType from './screens/CompanyType';
import Resort from './screens/Resort';
import Bank from './screens/Bank';
import IT from './screens/IT';

function App(){
    return(
        <BrowserRouter>
           <Routes>
            <Route path='/' element={<Landing />}/>
              <Route path='/company' element={<Compapnycalc />}/>
              <Route path='/personal' element={<PersonalCalc />}/>
              <Route path='/trip' element={<TripsCalc/>}/>
              <Route path='/type' element={<CompanyType />} />
              <Route path='/resort' element={<Resort />} />
              <Route path='/Bank' element={<Bank />} />
              <Route path='/IT' element={<IT/>} />
           </Routes>
        
        </BrowserRouter>
    )
}
export default App; 