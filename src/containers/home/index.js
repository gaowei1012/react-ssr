import React from 'react'
import Header from '../../components/Header'

class Home extends React.Component {

  click () {
    console.log('this is click')
  }

  render() {
    return (
      <div>
        <Header />
        <div>This is  Reatc SSR</div>
        <button onClick={this.click.bind(this)}>Click</button>
      </div>
    )
  }
}

export default Home
