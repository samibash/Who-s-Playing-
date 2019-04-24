import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Who's  Playing?</h1>
                    <SearchBar />
                </header>
            </div>
        )
    }
}