import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
    	<div id="home" className="App-header">
    		<div className="container-fluid text-center">
    			<div className="intro col-xs-12">
    				<h1 className="name">Juan Rojas</h1>
	    			<div className='cross'>
						  <div className='logo-container'>
						    <ul>
						      <li className='characters portrait' id='l-q'>J</li>
						      <li className='characters portrait' id='r-q'>R</li>
						      <li className='characters landscape' id='t-q'>W</li>
						      <li className='characters landscape' id='b-q'>D</li>
						    </ul>
						  </div>
						</div>
    				<h2 className="title">Web Developer</h2>
    			</div>
    		</div>
      </div>
    );
  }
};
        