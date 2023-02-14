'use client'

import { useState } from 'react'

export function User() {
  let [ count, setCount ] = useState(0)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
    </div>
  )
}

