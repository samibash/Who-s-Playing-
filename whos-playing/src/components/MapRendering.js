import React, { Component } from 'react';
import Map from '../components/Map/Map';

export default class MapRendering extends Component {
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