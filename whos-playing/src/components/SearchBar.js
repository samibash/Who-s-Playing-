import React, { Component } from "react";

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            zipcode: []
        }
        this.handleTextInput = this.handleTextInput.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }


    handleSubmitForm(event) {
        event.preventDefault()
        
        console.log("hey, you submitted your form!", this.state.zipcode)

        // const results = this.state.zipcode.map(zipcode => (
        //     zipcode
        // ))
        // console.log(results)
    }

    handleTextInput(event) {
        const API_KEY = "MTYyOTYyOTF8MTU1NTY5OTI3Mi41NQ"

        const thatZip = event.target.value
        // console.log("it's that zip", thatZip)
    
        // const userInputZipcode = thatZip
        
        const urlPostal = (`https://api.seatgeek.com/2/events?postal_code=${thatZip}&client_id=${API_KEY}`)
        fetch(urlPostal)
          .then(response => response.json())
          .then(data => {
              this.setState({
                  zipcode: data.events
              })
              console.log(this.state.zipcode)
          })
        // console.log(urlPostal)
    }

 
    // componentDidMount() {
    //     const API_KEY = "MTYyOTYyOTF8MTU1NTY5OTI3Mi41NQ"
    
    //     const url = (`https://api.seatgeek.com/2/events?client_id=${API_KEY}`)
    //     console.log(url)
    //     fetch(url)
    //       .then(response => response.json())
    //       .then(data => {
    //         console.log(data)
    //         this.setState({ 
    //           zipcode: data
    //         })
    //       })
    //     }



    render() {
        const map = this.state.zipcode.map(zipcodeInfo => (
            <p key={zipcodeInfo} className="train-item">
                <span>{zipcodeInfo.title}</span>
                <br/>
                <span>{zipcodeInfo.venue.address}</span>
                <br/>
                <span>{zipcodeInfo.type}</span>
            </p>
        ))
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmitForm}>
                    <div>
                        <p>Seriously, who's playing...</p>
                        <label>Enter zipcode</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.handleTextInput}
                        />
                        <button>Search</button>
                    </div>
                </form>
                <div>
                    { map }
                </div>
            </div>
        )
    }


}


export default SearchBar