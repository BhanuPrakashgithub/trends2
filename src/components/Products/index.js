// Write your JS code here
import {Component} from 'react'
import './index.css'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookies'

class Products extends Component {
  render() {
    if (Cookies.get('jwttoken') === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
        />
        <p className="para">Products </p>
      </div>
    )
  }
}
export default Products
