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
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
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
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
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
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
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
                          <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
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
        