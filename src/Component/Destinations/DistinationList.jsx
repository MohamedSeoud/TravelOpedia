import React, { Fragment, useState } from 'react'
import {useDeleteDestinationMutation, useGetAllDestinationQuery, useUpdateDestinationMutation } from '../../api/destinationApi'
import classes from './DestinationList.module.css';

function DestinationList() {

  const[countryInput,setCountryInput] = useState(undefined);
  const[cityInput,setCityInput] = useState(undefined);
  const{data, isLoading, isSuccess, isError, error}= useGetAllDestinationQuery();
  const[isClicked,setIsClicked] = useState(false);
  const[DeleteDestination] = useDeleteDestinationMutation();
  const[UpdateDestination] = useUpdateDestinationMutation();

  let Content;

  const onRemoveHandler = (id)=>{
    DeleteDestination({id:id});
  }

  const onEditHandler = (id)=>{
    setIsClicked(true);
  }

  const onCancelHandler =()=>{
    setIsClicked(false);
  }

  const onCityChange = (event)=>{
    setCityInput(event.target.value);
  }

  const onCountryChange = (event)=>{
    setCountryInput(event.target.value);
  }

  const onUpdateHandler = (item)=>{
    if(countryInput===undefined && cityInput=== undefined){
      UpdateDestination(item)
    }
    else if(countryInput===undefined){
      UpdateDestination({
        id: item.id,
        City:cityInput, 
        Country:item.Country,
        DayNeeded:item.DayNeeded
      })

    }
    else if(cityInput===undefined){
      UpdateDestination({
        id: item.id,
        City:item.City, 
        Country:countryInput,
        DayNeeded:item.DayNeeded
      })
    }
    else{
      UpdateDestination({
        id: item.id,
        City:cityInput, 
        Country:countryInput,
        DayNeeded:item.DayNeeded
      })
    }
    console.log(item);
    setIsClicked(false);

  }

  if(isLoading){
    Content=<p className={classes.para}>Loading........</p>
  }
  else if(isSuccess){
    Content=data.map((item)=>{return<div>
    <div className={classes.list}> 
      {isClicked===false?
      <div className={classes.para}><p className={classes.para}>{`${item.City}--${item.DayNeeded}--${item.Country}`} </p></div>:
      <div className={classes.para}>
        <input  onChange={onCityChange} placeholder={item.City} className={classes.input1}/>
        <input onChange={onCountryChange} placeholder={item.Country} className={classes.input2}/>
      </div>
      }
      <div className={classes.btn}>
      {isClicked===false?<button className={classes.btn1} onClick={()=>onRemoveHandler(item.id)}>Delete</button> :
      <Fragment>
      <button className={classes.btn1} onClick={onCancelHandler}>Cancel</button> 
      </Fragment>
      }
      {isClicked===false?<button className={classes.btn2} onClick={()=>onEditHandler(item.id)}>Edit</button>:
            <button className={classes.btn3} onClick={()=>onUpdateHandler(item)}>Update</button>}

      </div> 
      </div>;
      </div>
  })
    console.log(data);
  }
  else if(isError){
    Content=<p className={classes.para}>{error}</p>
  }

  return (
    <div>
      {Content}
    </div>
  )
}

export default DestinationList
