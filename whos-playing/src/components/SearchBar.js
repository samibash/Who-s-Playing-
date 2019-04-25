import React, { Component } from "react";

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: []
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }



    handleSubmitForm(event) {
        event.preventDefault()

        const API_KEY = "MTYyOTYyOTF8MTU1NTY5OTI3Mi41NQ"
        const thatZip = event.target.input.value
        const urlPostal = (`https://api.seatgeek.com/2/events?postal_code=${thatZip}&client_id=${API_KEY}`)

        fetch(urlPostal)
          .then(response => response.json())
          .then(data => {
              this.setState({
                  zipcode: data.events
              })
              console.log(this.state.zipcode[0].venue.location)
          })
    }



    render() {
        const map = this.state.zipcode.map((zipcodeInfo, index) => (
            <p key={index} className="train-item">
                <br/>
                <span className="Title">{zipcodeInfo.title}</span>
                <br/>
                <span className="Address">Address: {zipcodeInfo.venue.address}</span>
                <br/>
                <span className="Link">Get Tickets:</span>
                <button className="Anchor"><span><a href={zipcodeInfo.url}>Purchase</a></span></button>
            </p>
        ))
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Enter zipcode </label>
                        <input
                            type="text"
                            name="input"
                            onChange={this.handleTextInput}
                        />
                        <button className="Search" type="submit">Search</button>
                    </div>
                </form>
                <div>
                    { map }
                </div>
            </div>
        )
    }
}