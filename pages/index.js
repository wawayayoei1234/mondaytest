import { useDataContext } from '@/context';
import React from 'react'

function index() {
  const { data, setData } = useDataContext();
  return (
    <div>index</div>
  )
}

export default index