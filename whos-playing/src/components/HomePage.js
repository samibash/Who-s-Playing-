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
                <header>
                    <h1>Who's  Playing?</h1>
                    <SearchBar />
                </header>
                <main>
                </main>
            </div>
        )
    }
}

export default HomePage