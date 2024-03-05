
import { useEffect, useState } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries';

function App() {
const [countries, setCountries] = useState([])
useEffect(() => {
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
   setCountries(data);
  })
},[])

  return (
    <>
      <h1>Total Country: {countries.length}</h1>
      <div className="grid grid-cols md:grid-cols-3 gap-4">
      {
        countries.map(country => <Countries key={country.id} country={country}></Countries>)
      }
      </div>
    </>
  )
}

export default App
