import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Products from '../../components/Products'

function HomePage(props) {
  return (
    <div>
     <Products></Products>
    </div>
  )
}

HomePage.propTypes = {

}

export default HomePage

