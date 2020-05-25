import React from 'react';


const caseMaker = (word) => {
    let cased = word[0].toUpperCase();
    for(let i=1; i < word.length; i++) {
        word[i-1]===' ' || word[i-1]==='-' ? cased += word[i].toUpperCase() : cased += word[i];
    }
    return cased
};



const Flag = (props) => {
const {name, number, riskCode} = props
console.log(caseMaker(name));
    return(
        <div className='flag-division'>
            <h1 className='flag-name'>{caseMaker(name)==='Adult-Social-Network' ? 'Adult Network' : caseMaker(name)}</h1>
            
            <div>
                <h2 className='flag-value'>{number}</h2>
            </div>

            <div className='flag-footer'>
               <p style={{textAlign:'left'}}> Risk Code : {riskCode}</p>
            </div>
            
        </div>
    )
};

export default Flag;

