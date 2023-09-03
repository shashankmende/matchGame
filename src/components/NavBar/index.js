import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  render() {
    const {score} = this.props
    return (
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="right-side-container">
          <p>score:{score}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p>60</p>
        </div>
      </nav>
    )
  }
}
export default NavBar
