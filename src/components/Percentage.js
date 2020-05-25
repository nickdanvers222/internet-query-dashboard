import React, {useState, Component} from 'react';
import { Bar } from 'react-chartjs-2';
 
const Percentage = (props) =>{
    
    return(
        <div className='bar-chart'>
            <Bar 
            data={props.data}
            width='800'
            height='450'
            />
        </div>
    )
    
}

export default Percentage