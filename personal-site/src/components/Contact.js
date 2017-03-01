import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
    	<div id="contact" className="contact-section">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-xs-12">
              <h2>LET'S CREATE SOMETHING TOGETHER.</h2>
              <form className="contact-form" method="POST" action="http://formspree.io/jmr5150@gmail.com">
                <input type="email" name="email" placeholder="Email" />
                <br />
                <input type="subject" name="Subject" placeholder="Subject"/>
                <br />
                <textarea name="message" placeholder="Message"></textarea>
                <br />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
        