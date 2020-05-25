import React from 'react';


const Nav = () => {
    const navigation = (item) => {
        document.querySelector(item).scrollIntoView({ 
          behavior: 'smooth' 
        });
      };

    return(
        <div className='nav-division'>
            <div className='nav-name'>
              <h2 style={{marginLeft:'3vw', fontSize:'1.75em'}}>Internet Search Query Dashboard</h2>
            </div>
            <div className='nav-navigation'>
                <p className='navigation-text' onClick={()=>{navigation('#dashboard')}}>General Statistics</p>
                <p className='navigation-text' onClick={()=>{navigation('#flags')}}>Individual Flags</p>
            </div>
        </div>
    )
};

export default Nav;