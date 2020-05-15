// create your App component here
import React from "react";

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            humans: "unkown"
        };
    }

    componentDidMount()
    {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp=>resp.json())
        .then(data =>this.setState({
            humans: data.number
        }))
    }

    render()
    {
        return <p>There are {this.state.humans} humans in space.</p>
    }

}

export default App;