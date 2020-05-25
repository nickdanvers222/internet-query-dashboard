import React from 'react';
import IndividualQuickStatus from './IndividualQuickStatus';


const totalCounter = (issues) => {
  let counter = 0;
  for(const issue in issues) {
    if(issue !== 'chartData') {
      counter += issues[issue].length
    }
  }
  return counter;
};
const threatCounter = (issues) => {
  let counter = 0;
  const threateningIssues = ['selfHarm', 'exploited', 'drugs']
  for(const issue in issues) {
    if(threateningIssues.includes(issue))
    counter += issue.length
  }
  return counter;
};

const QuickStatus = (props) => {
 
    return(
        <div className='quick-status'>
             <h1 className='priority-flag-text'>Number of High-Consequence Queries</h1>
            <div className='priority-flag-number'>{props.flags ? threatCounter(props.flags) : 0}</div>

             <h2 className='priority-flag-text'>Number of Negative Queries</h2>
          <div className='priority-flag-number'>{props.flags ? totalCounter(props.flags) : 0}</div>
        </div>
    )
};

export default QuickStatus;