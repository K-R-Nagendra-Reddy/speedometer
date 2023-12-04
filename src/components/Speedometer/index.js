// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  Accelerate = () => {
    const {count} = this.state
    console.log(count)
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  Break = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" onClick={this.Accelerate}>
            {' '}
            Accelerate{' '}
          </button>
          <button className="button2" onClick={this.Break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
