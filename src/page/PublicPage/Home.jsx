import React from 'react'
import { useChild } from '../../CustomHook/useChild'

function Home() {

  const child = useChild()


  return (
    <div>Home : {child}</div>
  )
}

export default Home