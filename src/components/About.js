import React, {Component} from 'react';




export default class About extends Component {
  render(){
      return (
          <div className="about">
              <h1>What about Chuck?</h1>
                <h2>Actually known as Christy Remijio.</h2>
                <h3>From New York City 🍎 </h3>
                <h4>Lehman College Graduate with a B.S. in Computer Science and a B.A. in Creative Writing.</h4>
                <h5>I enjoy writing, coding, and gaming.</h5>
                <h6>It is in my future to combine my skills and knowledge of the three.</h6>
  
                <div class="resume">
                  <p>Click on resume to download:</p>
                  <a href="/resume.jpg" download="resume.jpg">
                  <img src="./resume.jpg" alt="Christy's resume" width="300" height="300" />
                </a>
                </div>
              
            <div class="copyright-bar">
             <p>© 2020 Christy Remijio. All rights reserved.</p>
            </div>
            <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div>
          </div>
      )
  }
}