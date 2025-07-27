import React from 'react'
import { useMyContext } from '../App'
import PageB from './PageB'

const PageA = () => {
    const {name, age} = useMyContext()
  return (
    <div>
        PageA
        {name}
        {age}
        <PageB/>
    </div>
  )
}

export default PageA