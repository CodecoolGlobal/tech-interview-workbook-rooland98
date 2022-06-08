import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  let [counter, setCounter] = useState(0);
  let [user, setUser] = useState(null);

  const fetchData = () =>{
    const apiUrl = "https://randomuser.me/api/";
    return axios.get(apiUrl)
        .then( (response)=>{
          return response.data;
        })
        .catch(err =>{
          console.log(err)
        });
  }

  useEffect(()=>{
    fetchData()
    .then( randomData=>{
      setUser(randomData['results']);  
    })
  }, [user]);


  return (
    <div className="App">
      <h1>Practice counter</h1>
      <div>
        {user?.map( userInfo => <h1 key={userInfo['id']}>{userInfo['name'].first} {userInfo['name'].last}</h1>)}
      </div>
      <p>{counter}</p>
      <button onClick={() => { setCounter(counter+=1) }}>Increase counter</button>
      <button onClick={() => { setCounter(counter-=1) }}>Decrease counter</button>
    </div>
  );
}

export default App;