import React, { Fragment } from 'react'; 
import classes from './AddDestination.module.css';

function AddDestination() {
  return (
    <Fragment>
    <p className={classes.para}> Travel List</p>
    <div className={classes.add}>
        <p>Enter New Destination:</p>
        <input className={classes.input1} placeholder='Enter City' type='text'/>
        <input className={classes.input2} placeholder='Enter Country' type='text'/>
        <button>Add</button>      
    </div>
    </Fragment>
  )
}

export default AddDestination
