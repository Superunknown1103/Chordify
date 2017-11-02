import React, { Component } from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
        this.state = { year: new Date().getFullYear() };
    }
    render() {
        return (
            <footer>
                <ul className="site-link" style={{margin: "0 auto", "text-align" : "center"}}>
                    <li>
                     {this.state.year} Bruce Tsvilikhovskiy
                    </li>
                </ul>
                </footer>
        );
    }
}

export default Footer;