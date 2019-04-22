import React, { Component } from "react";

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: []
        }
        this.handleTextInput = this.handleTextInput.bind(this)
    }
    

    handleTextInput(event) {
        const value = event.target.value
        console.log(value)
    }

    render() {
        return (
            <div>
                <form className="search-form">
                    <div>
                        <p>Here's a searchbar</p>
                        <label>Enter zipcode</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleTextInput}
                        />
                        <button>Search</button>
                    </div>
                </form>
            </div>
        )
    }


}


export default SearchBar