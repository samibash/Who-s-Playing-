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
                <br/>
                <div className="About-stuff">
                    <p>We are <em>Who's Playing</em> -- a fully Functional (yes, with a capital F) application that collects the most up to date information on
                    events, performances, and shows that are happening near you.
                    Just type in your zipcode and we'll find some cool events that are going on in your area.
                    </p>
                </div>
                <br/>
                <p className="Small-text">(limited to 10 events per search. Get those tickets while you can, you dirty dog you.)</p>
            </div>
        )
    }


}


export default AboutPage