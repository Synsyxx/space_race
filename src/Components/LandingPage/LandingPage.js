import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LandingPage.css';
import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.css';
class LandingPage extends Component {

    render() {
        return (
          <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <Header />
            <br />
            <br />
            <Middle/>
            <br />
            <br />
            <Footer />
          </div>
        );
      }
    }
    

export default LandingPage;

