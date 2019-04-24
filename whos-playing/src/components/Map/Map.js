import React, {Component} from 'react'

import ReactMapGL, { Marker, Popup } from 'react-map-gl'
// import LinkPin from './LinkPin'
// import LinnkInfo from './LinkInfo'
	

// console.log(process.env(REACT_APP_MAPBOX_TOKEN))

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FtaWJhc2giLCJhIjoiY2p1c24xcndnMHVpYjQzcDg0Yjl2MXlmYSJ9.mPzESeSZyLYBHGXG2K_7Ww'


class Map extends Component {
  constructor(props){
    super(props)

    this.state = {
        viewport: {
        width: '80vw',
        height: '70vh',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 12
      },
      popupInfo: null
    }
    // this._renderMarker = this._renderMarker.bind(this)
    // this._renderPopup = this._renderPopup.bind(this)

  }












//   _renderMarker(linkdata, i) {
//     console.log(linkdata)
//     const lat = this.state.linkdata.the_geom.coordinates[1];

//     const lng = this.state.linkdata.the_geom.coordinates[0];

//     return (
//       <Marker key={`postoffice-${i}`} longitude={lng} latitude={lat} >
//         <LinkPin size={20} onClick={() => this.setState({popupInfo: linkdata})} />
//       </Marker>
//     );
//   }



//   _renderPopup() {
//     console.log(this.state)
//     const popupInfo = this.state;
//     console.log(popupInfo.postoffices.map(el => {

//   const lat = el.the_geom.coordinates[0]
//   const lng = el.the_geom.coordinates[1]
//   return popupInfo && (
//     <Popup tipSize={5}
//       anchor="top"
//       longitude={lng}
//       latitude={lat}
//       onClose={() => this.setState({popupInfo: null})} >
//       <PostOfficeInfo info={popupInfo} />
//     </Popup>
//   );
// }))
// }
    














  render() {
    // console.log("Events in your area",this.props)
    const linkdata = this.props.linkdata;
    const { viewport } = this.state;
     
    return (
      <ReactMapGL
        width={viewport.width}
        height={viewport.height}
        latitude={viewport.latitude}
        longitude={viewport.longitude}
        zoom={viewport.zoom}
        
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken = {MAPBOX_TOKEN}>

        {/* {linkdata.map(this._renderMarker)} */}

        </ReactMapGL>

    )
  }
}
    
export default Map