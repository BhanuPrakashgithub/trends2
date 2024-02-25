// Write your JS code here
import {Component} from 'react'
import './index.css'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookies'

class Cart extends Component {
  render() {
    if (Cookies.get('jwttoken') === undefined) {
      const {history} = this.props
      history.push('/login')
      return <Redirect to="/login" />
    }
    return (
      <div className="main">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
        />
        <p className="para">Cart </p>
      </div>
    )
  }
}
export default Cart
