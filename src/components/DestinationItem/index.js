import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationDetails
  console.log(id)
  return (
    <li className="item">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
