import React, { Component } from "react";

class AboutPage extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>About</h2>
                <br/>
                <p className="Hello">Hello, cyber-traveler</p>
                <p>We are <em><strong>Who's Playing</strong></em> -- a fully functional application that collects the most up to date information on
                    events, performances, and shows that are happening near you.
                    Just type in your zipcode and we'll find cool events going on in your area.
                </p>
                <p className="Small-text">(limited to 10 events per search. Get those tickets while you can, you dirty dog you.)</p>
            </div>
        )
    }


}


export default AboutPage