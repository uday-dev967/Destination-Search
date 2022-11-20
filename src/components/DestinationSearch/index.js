import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChageSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )
    console.log(destinationsList)
    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-container">
          <input
            type="search"
            onChange={this.onChageSearchInput}
            value={searchInput}
          />
          <img
            className="search-image"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
          />
        </div>
        <ul className="list-container">
          {searchResults.map(each => (
            <DestinationItem destinationDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
