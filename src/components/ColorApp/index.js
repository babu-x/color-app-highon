import {Component} from 'react'
import './index.css'

class ColorApp extends Component {
  state = {isClicked: false}

  componentDidMount() {
    this.getColors()
  }

  getColors = async () => {
    const response = await fetch(
      'https://demo2965432.mockable.io/highon/colors',
    )
    const colors = await response.json()
    const {data} = colors
    console.log(data)
  }

  openCard = () => {
    this.setState({isClicked: true})
  }

  cancelBtn = () => {
    this.setState({isClicked: false})
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="color-app-container">
        <input type="search" className="user-input" />
        {isClicked ? (
          <div className="color-card">
            <div className="header-container">
              <p className="main-header">Create a color card</p>
            </div>
            <h1 className="title">Select the Color</h1>
            <ul>
              <button type="button" className="color1">
                .
              </button>
              <button type="button" className="color2">
                .
              </button>
              <button type="button" className="color3">
                .
              </button>
              <button type="button" className="color4">
                .
              </button>
              <button type="button" className="color5">
                .
              </button>
            </ul>
            <h1 className="sub-title">Give a title</h1>
            <button type="button" className="sub-title-btn">
              The Blue Carbuncle
            </button>
            <h1 className="description-title">Description</h1>
            <p className="description-des">
              Lorem Ipsum has been the industry standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type
            </p>
            <div className="btn-container">
              <button type="button" className="save-btn">
                Save
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={this.cancelBtn}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <button
              type="button"
              className="color-card-button"
              onClick={this.openCard}
            >
              <span>+</span> Create a Color Card
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default ColorApp