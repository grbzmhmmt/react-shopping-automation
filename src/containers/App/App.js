import React from 'react'

import { Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Cart from '../../components/Cart'
import Features from '../../components/Features'

const App = (props) => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/features" component={Features} />
    </div>
  )
}

App.propTypes = {

}

export default App

