import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import ContactForm from '../misc/ContactForm';

export default class Home extends Component {
    render() {
        return (
            <>
            <div className="wrapper">
                <Helmet>
                    <title>Home | EDS - KC</title>
                </Helmet>
                <h1>Educational Diagnostic Services</h1>
                {/* TODO: update content */}
                <p>Welcome</p>
                <br/>
                <Grid fluid>
                    <Row center="xs">
                        <Col xs={12} sm={3}>
                            <i className="fas fa-seedling xl-icon green" />
                            <h3>Green Column</h3>
                            <p>More information below</p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <i className="fas fa-tree xl-icon orange" />
                            <h3>Orange Column</h3>
                            <p>More information below</p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <i className="fas fa-globe-africa xl-icon red" />
                            <h3>Red Column</h3>
                            <p>More information below</p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <i className="fas fa-star xl-icon yellow" />
                            <h3>Yellow Column</h3>
                            <p>More information below</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <div className="full-width bg-blue">
                <div className="wrapper white">
                    <h1 className="white no-margin">Why the long text?</h1>
                    <p>
                        Testing that the Contact anchor works! Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea. Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea. Aliquip amet tempor velit anim voluptate eu. Culpa quis laborum laboris est cupidatat. 
                        In cillum ipsum commodo laboris ex ad aute. Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea. Aliquip amet tempor velit anim voluptate eu. Culpa quis laborum laboris est cupidatat. 
                        In cillum ipsum commodo laboris ex ad aute. Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea.
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea.
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea.
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                    </p>
                    <p>
                        Ut eu ipsum ipsum et occaecat aliqua nostrud ex est minim. 
                        Cupidatat ipsum ex voluptate ea eu aliqua enim eiusmod duis et veniam. Cupidatat nisi adipisicing velit ad 
                        minim adipisicing cillum do excepteur excepteur laborum sit ea. Aliquip amet tempor velit anim voluptate eu. Culpa quis laborum laboris est cupidatat. 
                        In cillum ipsum commodo laboris ex ad aute. Aute elit incididunt excepteur irure esse aliquip nisi amet ex quis.
                    </p>
                </div>
            </div>
            <div className="wrapper">
                <h1><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                <ContactForm />
            </div>
            </>
        )
    }
}
