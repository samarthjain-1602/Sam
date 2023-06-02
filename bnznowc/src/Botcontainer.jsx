import React from 'react';

function Botcontainer(){
    return(
        <div> 
        <ul className='navList1'>
            <li>Home</li>
            <li>Project developers</li>
            <li>Corporations</li>
            <li>Individuals</li>
        </ul>
        <ul className='navList2'>
            <li>About Us</li>
            <li>Blogs & News</li>
            <li>FAQ</li>
            <li>Contact us</li>
        </ul>
        <div className='links'>
        <img className='fb'
        src = 'https://www.facebook.com/images/fb_icon_325x325.png' alt='fb'></img>
        <img className= 'Ig'
        src ='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' alt='Ig'></img>
        <img className='Dc'
        src = 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ' alt='dc'></img>
        
        <img className='tg'
        src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png' alt='tg'></img>
        <img className='bnz'
        src = '/images/BNZ logo.png' alt='bnwnow'></img>
        </div>
        
        </div>
        


        
    )
    
}

export default Botcontainer;