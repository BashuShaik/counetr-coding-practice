import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1 className="container">Hello {name}</h1>
  }
}

export default Welcome
