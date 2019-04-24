import React, { Component } from 'react';
import Map from '../components/Map/Map';

class MapRendering extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <div className="MapContainer">
                    <Map component={Map} linkdata={this.state.linkdata} />
                </div>
            </div>
        )
    }
}


export default MapRendering