import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

export default class SegmentMap extends Component {

state = {
    lat: this.props.lat,
    lng: this.props.lng,
    zoom: 13,
    }
    
  render() {


    const position = [this.state.lat, this.state.lng]

    return (
      <Map center={position} zoom={this.state.zoom} width={200} height={320}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    )
  }
}
