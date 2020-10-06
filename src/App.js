import React from 'react';
import './App.css';
import Student from './Student.js';

function App() {
  return (
    <div className="App">
      <h1 className="leader">Leadersboard</h1>
     <Student name="Munnazzah Aslam" uni="NED" score={240}/>
     <Student name="Muhammad Moiz" uni="ELMA" score={340}/>
     <Student name="Ali Yousuf" uni="SZABIST" score={349}/>
    </div>
  );
}

export default App;
