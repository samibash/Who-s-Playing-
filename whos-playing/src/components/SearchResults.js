import React, { Component } from "react";

class SearchResults extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div>
                {this.props.map}
            </div>
        )
    }


}


export default SearchResults