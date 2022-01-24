import React from "react"
import { imagesStyles } from '../../styles/images-styles.js'

export default class DisplayAvatar extends React.Component {
  render() {
    const { image } = this.props
    return (
      <div className="image-wrapper">
        <img src={image} style={imagesStyles} alt={image} />
      </div>
    )
  }
}
