import React, { Component } from 'react';
import Map from '../components/Map/Map';
import SearchBar from './SearchBar';

export default class MapRendering extends Component {
    render() {
        return (
            <div>
                <h2 className="AboutH2">Map</h2>
                <br/>
                <div className="AboutH2">
                    <SearchBar />
                </div>
                <div className="MapContainer">
                    <Map component={Map} linkdata={this.props.linkdata} />
                </div>
            </div>
        )
    }
}