import React from 'react';
import MyComponent from "./MyComponent"
import './App.css';

const user1 = {
  name :"Jhon" , 
  lastName :"Doe",
  isMale : true
}
const user2={
  name :"Jane" , 
  lastName :"Doe",
  isMale : false 
}
const formatName = (user) => user.name + " " + user.lastName


function App() {
  return (
    <div>

    <h1 className={user1.isMale ? "red" :"blue"  } >Hello {formatName(user1)}</h1>
    <h1 className={user2.isMale ? "red" :"blue"  } >Hello {formatName(user2)}</h1>
    </div>
  );
}

export default App;
