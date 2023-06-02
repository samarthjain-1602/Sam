import React, { useState } from 'react';
function TFooter(){ return(
    <div> 
        <ul className='NAV3'>
            <li>Home</li>
            <li>Project developers</li>
            <li>Corporations</li>
            <li>Individuals</li>
        </ul>
        <ul className='NAV4'>
            <li>About Us</li>
            <li>Blogs & News</li>
            <li>FAQ</li>
            <li>Contact us</li>
        </ul>
        <div className='links3'>
        <img className='FACEBOOK1'
        src = 'https://www.facebook.com/images/fb_icon_325x325.png' alt='fb'></img>
        <img className= 'INSTAGRAM1'
        src ='https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg' alt='Ig'></img>
        <img className='DISCORD1'
        src = 'https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ' alt='dc'></img>
        
        <img className='TELEGRAM1'
        src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/800px-Telegram_2019_Logo.svg.png' alt='tg'></img>
        <img className='BNZ1'
        src = '/images/BNZ logo.png' alt='bnwnow'></img>
        </div>
        
        </div>
     )
}

export default TFooter;