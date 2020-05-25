import React from 'react';

const Search = (props) => {
    const navigation = (item) => {
        document.querySelector(item).scrollIntoView({ 
          behavior: 'smooth' 
        });
      };
    return (
        <div className='search-division' id='flags'>
            <h1>Category Search</h1>
            <input value={props.textState} onClick={()=>{navigation('#flags')}}onChange={(event)=>{
                props.setTextState(event.target.value);
                }}
                className='search-input' type='text' placeholder='type here...'/>
        </div>
    )
};

export default Search;