import React, { Component } from 'react';
import LinkContainer from './LinkContainer';

export default class Contact extends Component {

    render() {
        return (
            <div className="contact">
              <h1>Contact Me Down Below</h1>
              <h2>Phone: (845) 327-9929</h2>
              <h3>Email: christyremigio@yahoo.com</h3>

              <LinkContainer />

            <div class="copyright-bar">
             <p>© 2020 Christy Remijio. All rights reserved.</p>
            </div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
          </div>
        );
    }
}