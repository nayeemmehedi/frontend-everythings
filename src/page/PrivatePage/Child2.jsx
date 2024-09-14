import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount} from '../../redux-toolkit/toolkit_basic/Reducer'

function Child2() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment : 
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          :  Decrement
        </button>

        <button
          aria-label=" 5 add increment value "
          onClick={() => dispatch(incrementByAmount(10))}
          className='bg-red-400 border-2 border-black space-x-4 p-3 '
        >
           5 add Increment
        </button>



      </div>
    </div>
  )
}

export default  Child2