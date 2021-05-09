import {Component} from 'react'
import Error from 'components/Error'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {error: false, message: ''}
  }

  static getDerivedStateFromError(error) {
    return {error: true, message: error}
  }

  render() {
    if (this.state.error) return <Error error={this.state} />
    return this.props.children
  }
}

export default ErrorBoundary
