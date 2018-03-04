import { Container } from 'unstated'

class Counter extends Container {
  constructor () {
    super()
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }
  increment () {
    this.setState({ count: this.state.count + 1 })
  }
  decrement () {
    this.setState({ count: this.state.count - 1 })
  }
}

export default Counter
