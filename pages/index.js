import { useDataContext } from '@/context';
import React from 'react'

function index() {
  return (
    <div>
      <input onChange={(e)=>{setData((prevData) => ({ ...prevData, home: e.target.value }));}}></input>
    </div>
  )
}

export default index