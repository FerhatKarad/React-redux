import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div> <h1>This Button will be empty if you leave this site </h1>
      <div container mt-5>
        <div className='row'>
          <div className='col-md-5'>
            <div className='card border-top-0 dorder-dark'>
              <div className='card-body'>
                <h1 className='text-center'>{count}</h1>
                <button className='btn btn-primary m-1' onClick={() => setCount(count + 1)}>Count + 1</button>
                <button className='btn btn-secondary m-1' onClick={() => setCount(count - 1)}>Count - 1</button>
                <button className='btn btn-info' onClick={() => setCount(count + 5)}>Increment + 5</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
