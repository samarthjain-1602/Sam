import React from 'react';
import { NavLink } from "react-router-dom";


function Midcontainer(){

     const boxes = [
            { 
              image: '/images/Group 2611504.svg',
              heading: 'My Company Footprint',
              paragraph: 'Complete the following calculator to calculate the carbon footprint of your company.',
              to:'type'
            
            },
            { 
              image: '/images/Group 2611505.svg',
              heading: 'My Personal Footprint',
              paragraph: 'Complete the following calculator to calculate the carbon footprint of your company.',
              to: 'personal'
            },
            {
              image: 'images/Group 2611506.svg',
              heading: 'My Trips Footprint',
              paragraph: 'Complete the following calculator to calculate the carbon footprint of your company.',
              to: 'trip'
            },
          ];

    
    function Clickable(){
   
    }
    return(
    <div className='MIDCONT'>
       <div className='middiv'>
            <h2 className='midh2'>Calculate by your choice</h2>
            <p>
              <span className='midp'>We have designed a range of carbon footprint calculators to assess your CO2 emmissions through a series of simple questions - whatever your sector or the type of activity you want to offset. Together let's </span><span style = {{fontWeight: 'bold'}}className='p1'>Become net zero!</span>
            </p>
        </div>
            
      
        <div className='boxes'>
      {boxes.map((box) => (
        <NavLink exact to="/" className="navlink" activeClassName="active" to={box.to}>
        <div className='BOX' key={box.heading} onClick={() => console.log(box.heading)}>
          <img className='boximg'src={box.image}></img>
          <h4>{box.heading}</h4>
          <p>{box.paragraph}</p>
        </div>
        </NavLink>
      ))}
    </div>
        </div>
    
        
        
        
    )
    
}

export default Midcontainer;