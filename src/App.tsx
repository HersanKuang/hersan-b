import React from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'

function App() {
  return <div className="app">{useRoutes(routes)}</div>
}

export default App
