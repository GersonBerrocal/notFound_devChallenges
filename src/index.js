import React from 'react'
import reactDOM from 'react-dom'

import Header from './Header'
import NotFound from './NotFound'

function Main() {
  return (
    <div className="wrapper">
      <Header />
      <NotFound />
    </div>
  )
}

reactDOM.render(<Main />, document.getElementById('root'))
