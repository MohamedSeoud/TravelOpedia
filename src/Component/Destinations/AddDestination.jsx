import React, { Fragment, useState } from 'react'; 
import classes from './AddDestination.module.css';
import { useAddDestinationMutation } from '../../api/destinationApi';

function AddDestination() {
  const[cityInput,setCityInput]=useState('');
  const[countryInput,setCountryInput]=useState('');
  const[addDestinationMutation] = useAddDestinationMutation();

  const onCityChangeHandler = (event)=>{
    setCityInput(event.target.value);
  }

  const onCountryChangeHandler = (event)=>{
    setCountryInput(event.target.value);
  }

  const onSubmitHandler = (event)=>{
    event.preventDefault();
    addDestinationMutation({
      id: Math.floor(Math.random()*100),
      City:cityInput, 
      Country:countryInput,
      DayNeeded:Math.floor(Math.random()*8)
    })
  }

  return (
    <Fragment>
    <p className={classes.para}> Travel List</p>
    <div className={classes.add}>
      <form onSubmit={onSubmitHandler}>
        <p>Enter New Destination:</p>
        <input onChange={onCityChangeHandler} className={classes.input1} placeholder='Enter City' type='text'/>
        <input onChange={onCountryChangeHandler} className={classes.input2} placeholder='Enter Country' type='text'/>
        <button className='form-control'>Add</button>      
        </form>
    </div>
    </Fragment>
  )
}

export default AddDestination
