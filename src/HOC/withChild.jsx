import React from 'react'

function withChild(Component) {
  return function anthing (props) {

    

    return
    <div>
        
             <div className='bg-red-500'> <Component></Component></div>
        
        

    </div>

  }
}

export default withChild