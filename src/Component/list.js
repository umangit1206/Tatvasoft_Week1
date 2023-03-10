import React from 'react'
import Array from './Array'
function List() {
  //const array=["Umang","Kavan"]
  const array=[{id:1,title:"A",description:"abc"},{id:2,title:"B",description:"xyz"}]
  //const namelist=array.map(name =><h2>{name}</h2>)
const namelist=array.map(array =><Array key={array.id} array={array}/>)

         return (<div>{namelist}</div>)

}

export default List




