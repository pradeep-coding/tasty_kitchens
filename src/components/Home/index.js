import Component from 'react'
import './index.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class Home extends Component {
  render() {
    return (
      <>
        <h1>Home Tester</h1>
      </>
    )
  }
}

export default Home
