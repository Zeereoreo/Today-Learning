import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <h4>안녕하세요</h4>
      <Profile name='철수' age='20'></Profile>
    </div>
  );
}
function Profile(props:{name:string, age:string}){
  return(
    <div>{props.name}프로필</div>
  )
}

export default App;
