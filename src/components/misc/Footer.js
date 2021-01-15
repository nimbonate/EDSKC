import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = { 
          year: new Date().getFullYear(),
          deviceWidth: 0,
          deviceHeight: 0
        };
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions = () => {
        this.setState({ deviceWidth: window.innerWidth, deviceHeight: window.innerHeight });
    }

    render() {
        return (
            <footer>
                <div className={this.state.deviceWidth >= 900 ? "f-container" : "hide"}>
                    <div className="left">
                        &nbsp;&nbsp;<Link to="/about">About</Link>&nbsp;&nbsp;
                    </div>

                    <div className="center">
                        <div className="center-text">
                            <a href="https://www.linkedin.com/in/kristin-droege-6565623/" target="_blank" rel="noopener noreferrer" className="black">
                                <i className="fab fa-linkedin"/>
                            </a>
                        </div>
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        EDS - KC
                    </div>

                    <div className="right">
                        <a href="https://www.linkedin.com/in/nathan-a-elkind/" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by Nathan A Elkind</a> 
                        &nbsp;&nbsp;
                    </div>
                </div>
                <div className={this.state.deviceWidth < 900 ? "f-container" : "hide"}>
                    <div>
                        <a href="https://www.linkedin.com/in/kristin-droege-6565623/" target="_blank" rel="noopener noreferrer" className="black">
                            <i className="fab fa-linkedin"/>
                        </a>
                    </div>
                    <div>
                        &copy;
                        {' '}
                        {this.state.year}
                        {' '}
                        Education Diagnostic Services Kansas City
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/nathan-a-elkind/" target="_blank" rel="noopener noreferrer"><i className="fas fa-tools"/> by Nathan A Elkind</a> 
                    </div>
                    <div className="s-padding-b">
                        <Link to="/about">About</Link>
                    </div>
                </div>
            </footer>
        )
    }
}
