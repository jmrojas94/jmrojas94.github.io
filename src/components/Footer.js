import React from 'react';

import FontAwesome from 'react-fontawesome';

export default class Footer extends React.Component {
  render() {
    return (
    	<div id="footer" className="footer">
        <div className="container-fluid">
          <div className="row">
        		<footer className="text-center col-xs-12">
              <h2>Juan Rojas</h2>
              <p className="email"><b>Email:</b> juanmrojas94@gmail.com</p>
              <div className="social">
                <a href="https://www.facebook.com/juan.rojas.1000?ref=bookmarks"><FontAwesome name="facebook" size='2x'/>
                </a>
                <a href="https://twitter.com/jmrojas94"><FontAwesome name="twitter"
                          size='2x'/>
                </a>
                <a href="https://www.linkedin.com/in/jmrojas94/"><FontAwesome name="linkedin"
                          
                          size='2x'/></a>
                <a href="https://github.com/jmrojas94"><FontAwesome name="github"
                          
                          size='2x'/></a>
                <a href="https://www.instagram.com/jrojastx/"><FontAwesome name="instagram"
                          
                          size='2x'/></a>
                </div>
                <h6>J Rojas 2017</h6>
            </footer>
          </div>
        </div>
      </div>
    );
  }
};
        