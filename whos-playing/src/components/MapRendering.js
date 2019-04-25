import React, { Component } from 'react';
import Map from '../components/Map/Map';

export default class MapRendering extends Component {
    render() {
        return (
            <div>
                <h2>Map</h2>
                <br/>
                <div className="MapContainer">
                    <Map component={Map} linkdata={this.props.linkdata} />
                </div>
            </div>
        )
    }
}