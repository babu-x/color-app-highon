import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    if (event.target.value.includes(' ')) {
      this.setState({
        activeId: event.target.value.replace(' ', '_').toUpperCase(),
      })
    } else {
      this.setState({activeId: event.target.value.toUpperCase()})
    }
  }

  render() {
    const {activeId} = this.state
    const data = countryAndCapitalsList.filter(each => each.id === activeId)
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              value={activeId}
              className="select"
              onChange={this.onChangeOption}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} className="capitals" value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <ul className="countries-container">
            {data.map(each => (
              <li key={each.id}>
                <p className="country">{each.country}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Capitals
