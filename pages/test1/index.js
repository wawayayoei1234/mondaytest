import { useDataContext } from '@/context';
import React from 'react'

function index() {
  const { data, setData } = useDataContext();
  console.log("data",data)
  return (
    <div>
      <input onChange={(e)=>{setData((prevData) => ({ ...prevData, test1: e.target.value }));}}></input>
    </div>
  )
}

export default index