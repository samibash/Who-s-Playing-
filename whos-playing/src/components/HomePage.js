import React, { Component } from "react";
import SearchBar from "./SearchBar";

class HomePage extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <h1>Who's Playing?</h1>
                <SearchBar />
            </div>
        )
    }
}

export default HomePage