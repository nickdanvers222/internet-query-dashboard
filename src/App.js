import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import QuickStatus from './components/QuickStatus'
import Percentage from './components/Percentage'
import Flag from './components/Flag'
import Search from './components/Search'
import Nav from './components/Nav'

const load = (object) => {
  let newArr = [];
  for(const item in object) {
    if(item === 'chartData') {

    } else {
      newArr.push({
        name:object[item][0].risk,
        number:object[item].length-1,
        riskCode:object[item][0].risk_level
      })
    }

  }
  
  return newArr;
}

function App() {
const [textState, setTextState] = useState('');
const [flagState, setFlagState] = useState([])
const [state, setState] = useState({
  vulgarity:'',
  drugsStudents:'',
  adultSocialStudents:'',
  pornographyStudents:'',
  anonymousStudents:'',
  selfHarmStudents:'',
  malwareStudents:'',
  exploitedStudents:'',
  chartData:[],
})


  useEffect(()=>{
    axios.get('http://localhost:3001')
    .then( (event)=>{
      setState(event.data);
      setFlagState(load(event.data));
    })
  },[]);
  // let filteredFlagState = 
  // console.log(filteredFlagState)
  // state.vulgarity=== '' ? console.log('not yet') : load(state);

  return (
    <div className="App">
      <Nav />
      <div id='dashboard' className='top-division'>
      <QuickStatus flags={state}/>
      <Percentage data={state.chartData}/>
      </div>
      <Search textState={textState} setTextState={setTextState}/>
      <div  className='lower-division'>
        {flagState.filter((item) => item.name.toLowerCase().match(textState.toLowerCase())).map((item)=> <Flag name={item.name} number={item.number} riskCode={item.riskCode}/> )}
       
      </div>

      <div className='footer'>
        <p className='disclosure'>Created by Nicholas Danvers, with mock data from Imagine Everything</p>
      </div>
      
    </div>
  );
}

export default App;
