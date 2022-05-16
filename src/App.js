import './App.css';
import React, {useState, useEffect} from 'react';
import Dropdown from './Dropdown'
import axios from 'axios';

const App = () => {

  console.log("RENDERING APP.js")

  const clientId = "9987e61134c448e4b3d10e940f6df0c4"
  const clientSecret = "7f0b835b16a44fe1a90a71922df75fff"

  const data = [
    {value: 1, name: "A"},
    {value: 2, name: "B"},
    {value: 3, name: "C"},
    ]

    const [token, setToken] = useState('');
    const [response, apiResponse] = useState("");

    useEffect(() => {
      // axios('https://accounts.spotify.com/api/token', {
      //   headers: {
      //     'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
      //     'Authorisation' : 'Basic' + btoa(clientId + ":" + clientSecret)
      //   },
      //   data: 'grant_type=client_credentials',
      //   method: 'POST'
      // })
      // .then(tokenResponse => {
      //   console.log(tokenResponse.data.access_token)
      // })

    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => apiResponse(res));
    }, [])


  return (
    <form onSubmit = {() => {}}>
      <div className ="m-5 text-center container">
        <Dropdown options = {data}/>
        <Dropdown options = {data}/>
        <button type='submit'>
          Search
        </button>
        <p className="App-intro">{response}</p>
      </div>
    </form>
  );
}

export default App;
