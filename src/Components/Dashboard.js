import React from 'react'

function Dashboard() {
  return (
   <>
   <div className="dashboard">
      <div className="left-panel">
        <Counter />
      </div>
      <div className="right-panel">
        <ProductDetails />
      </div>
    </div>
   </>
  )
}

export default Dashboard