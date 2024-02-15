import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    totalcount: 0,
    count2: 0,
    count3: 0,
    result: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossRandom = () => {
    const {count2, count3} = this.state
    const headsimg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    const tailsimg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    const randomt = Math.ceil(Math.random() * 2)
    let toss = ''
    let c1 = count2
    let c2 = count3

    if (randomt === 1) {
      toss = headsimg
      c1 += 1
    } else {
      toss = tailsimg
      c2 += 1
    }
    this.setState({
      result: toss,
      count2: c1,
      count3: c2,
      totalcount: c1 + c2,
    })
  }

  render() {
    const {totalcount, count2, count3, result} = this.state
    return (
      <div className="bg">
        <div className="bg-ins card">
          <h1 className="head">Coin Toss Game</h1>
          <p className="p1">Heads (or) Tails</p>
          <img className="wid" src={result} alt="toss result" />
          <button type="button" className="btn" onClick={this.tossRandom}>
            Toss Coin
          </button>
          <div className="p2">
            <p>Total: {totalcount}</p>
            <p>Heads: {count2}</p>
            <p>Tails: {count3}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
