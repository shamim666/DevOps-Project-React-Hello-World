import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [ cars , setCars ]  = useState([])
  const nameRef = useRef();
  const priceRef = useRef(); 

  // get data from node server by using get method
  useEffect( ()=>{
    fetch(`http://localhost:5000/cars`)
    .then(res =>res.json())
    .then(data =>setCars(data))
    
  }, [])

  const handleAddCars = (event) =>{
    const name = nameRef.current.value 
    const price = priceRef.current.value
    const carInfo = { name: name , price : price }

    // send data to backend server

    fetch(`http://localhost:5000/cars` , {
      method : 'post',
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(carInfo)  
    })
    .then(res => res.json())
    .then(data => { 
    //console.log(data)
    const addedCar = data 
    const newCars = [...cars , addedCar ]
    setCars(newCars);
    })   

    nameRef.current.value = '' 
    priceRef.current.value = ''

    event.preventDefault()
  }


  return (
<div className="App">
        <h2>users :{cars.length} </h2>

        <form onSubmit={handleAddCars}>
          <input type = "text" ref={nameRef} placeholder="name" />
          <br/>
          <input type = "text" ref={priceRef} placeholder = "price" />
          <br/>
          <input type = "submit" value="submit"/>
        </form>
        <ul>
          {cars.map(car => <li key={car.id}> {car.id} : name={car.name} price={car.price}</li>)}
        </ul>
    </div>
  );
}

export default App;
