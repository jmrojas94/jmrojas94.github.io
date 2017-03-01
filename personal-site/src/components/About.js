import React from 'react';

export default class About extends React.Component {
  render() {
    return (
    	<div id="about" className="about-section">
    		<div className="container-fluid about-wrapper">
          <div className="row">
            <div id="about-title" className="about-title">
              <div className="text-center content-header">
                <h2>ABOUT ME</h2>
              </div>
            </div>
            <div className="about-me">
              {/*<div className="hex">
                <div className="hex2">
                  <div className="hex3"></div>
                </div>
              </div>*/}
              <div className="about-content">
                  <h3>Hi, Friend! My Name Is Juan Rojas...</h3>
                  <p>
                      I am a creator with a focus on music, design and development and am passionate about the future of human-computer interaction.
                  </p>
                  <p>
                      I grew up in a small town in Southwest Texas, where boredom led me towards honing creative skills in music and art. Eager to pursue a career where creativity was at the forefront, I started learning graphic design, photography, and guitar. I played in a mildly successful local band which taught me networking skills, as well as management and marketing.
                  </p>
                  <p>
                      As I tried to find a place where I can use creativity, I discovered the world of software development. I decided to attend Dev Bootcamp in Austin, TX in order to streamline my dive into this career field and I do not regret anything. I quickly learned the basics of JavaScript, SQL, HTML, CSS, jquery, ajax, Rails, and git among other things. My passion for furthering human and technological connection has grown.
                  </p>
                  <p>
                      Now, through my new-found passion, I will continue to push myself in order to learn and grow as a developer, a teammate, and ultimately, a person.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
        