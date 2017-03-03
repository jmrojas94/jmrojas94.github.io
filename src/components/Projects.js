import React from 'react';

export default class Projects extends React.Component {
  render() {
    return (
    	<div id="projects" className="project-section">
        <div className="container-fluid">
          <div className="row">
            <div className="text-center col-xs-12">
              <h2>PROJECTS</h2>
              <div className="project-container">
                  <ul className="projects">
                    <li className="project">
                      <a href="" className="image"><img src={require("../../public/images/peribit.png")}/>
                        <div className="overlay">
                          <span className="project-label">peribit</span>
                        </div>
                      </a> 
                      <div className="details">
                        <div className="text">
                          <h3>peribit</h3>
                          <p>Peribit is a social media app where through user engagement, content avoids being deleted. 
                            <br />
                            <br />
                            It was created with two other classmates as a final project while at Dev Bootcamp.
                          </p>
                          <p><b>LIVE LINK: </b><a href="http://www.peribit.io/">peribit.io</a></p>
                          <p><a href="https://github.com/jmrojas94/peribit"><b>GITHUB LINK</b></a></p> 
                          <span><b>TECHNOLOGIES USED: </b>Rails, Bootstrap, Javascript</span> 
                        </div>
                      </div>
                    </li>
                    <li className="project">
                      <a href="" className="image"><img src={require("../../public/images/top-tracks.png")}/>
                        <div className="overlay">
                          <span className="project-label">top-tracks</span>
                        </div>
                      </a>
                      <div className="details">
                        <div className="text">
                          <h3>top-tracks</h3>
                          <p>Top-Tracks uses the Spotify API to pull in all of your current most listened to tracks on Spotify. 
                            
                          </p>
                          <br />
                          <p><b>LIVE LINK: </b><a href="http://spottoptracks.herokuapp.com/">top-tracks</a></p>
                          <p><a href="https://github.com/jmrojas94/top-tracks"><b>GITHUB LINK</b></a></p> 
                          <span><b>TECHNOLOGIES USED: </b>Node.js, Bootstrap, Spotify API, Heroku</span> 
                        </div>
                      </div>
                    </li>
                    <li className="project">
                      <a href="" className="image"><img src={require("../../public/images/resource-repository.png")}/>
                        <div className="overlay">
                          <span className="project-label">resource repository</span>
                        </div>
                      </a>
                      <div className="details">
                        <div className="text">
                          <h3>resource repository</h3>
                          <p>Resource Repository is a database of resources where teachers can upload content using a CMS for students, and students can log in and "like" their favorite articles, posts, or links.
                          <br />
                          <br />
                          It was completed as a group project while at Dev Bootcamp.
                            
                          </p>
                          <p><a href="https://github.com/jmrojas94/resources-repository"><b>GITHUB LINK</b></a></p> 
                          <span><b>TECHNOLOGIES USED: </b>Rails, Bootstrap, Javascript</span>  
                          </div>
                      </div>
                    </li>
                    <li className="project">
                      <a href="" className="image"><img src={require("../../public/images/game-of-life.png")}/>
                        <div className="overlay">
                          <span className="project-label">game of life</span>
                        </div>
                      </a>
                      <div className="details">
                        <div className="text">
                          <h3>game of life</h3>
                          <p>A React rendition of the Game of Life.
                            
                          </p>
                          <br />
                          <p><a href="https://github.com/jmrojas94/react_game_of_life"><b>GITHUB LINK</b></a></p> 
                          <span><b>TECHNOLOGIES USED: </b>React</span>  
                        </div>
                      </div>
                    </li>
                  </ul>  


              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
        