import React from 'react';

const IndividualQuickStatus = (props) => {

    return(
        <div className='individual-quick-status'>
            <h3>{props.name}</h3>
            <p>{props.number}</p>
        </div>
    )
};

export default IndividualQuickStatus;