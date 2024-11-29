import React from 'react'
import Box from './Box';

function Itmes() {

    const arr = [];

    for(let i=1;i<=50;i++)
    {
       arr.push( <li key={i}>Items {i}</li>)
    }
    
  return (
    <div>

      {arr}
      <Box/>
      {arr}

    </div>
  )
}

export default Itmes
