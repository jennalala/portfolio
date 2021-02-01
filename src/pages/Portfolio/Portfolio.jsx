import React from "react";
import "./Portfolio.css"
const Portfolio = () => {
  return (
    <body>
      <div className="container">
        <main className="row">
          <div className="col-sm-12">
            <div className="col-sm-12">
              <h1>Portfolio</h1>
              <div>
                <p>Know Before You Go</p>
                <a
                  href="https://jennalala.github.io/know-before-you-go/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Deployed Site
                </a>
                <a
                  href="https://github.com/jennalala/know-before-you-go"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
              <img
                data-src="holder.js/200x200"
                className="img-thumbnail img-responsive shadow float-left"
                alt="200x200"
                data-holder-rendered="true"
              />

              <main className="row">
                <div className="col-sm-12">
                  <div className="col-sm-12">
                    <div>
                      <p>Password Generator</p>
                      <a
                        href="https://jennalala.github.io/password_genHWtake2/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                      <a
                        href="https://github.com/jennalala/password_genHWtake2"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Repository
                      </a>
                    </div>
                    <img
                      data-src="holder.js/200x200"
                      className="img-thumbnail img-responsive shadow float-left"
                      alt="200x200"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </main>
              
              <main class="row">
                <div class="col-sm-12">
                  <div class="col-sm-12">
                    <div>
                      <p>Workout Tracker</p>
                      <a
                        href="https://hidden-meadow-74172.herokuapp.com/"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Deployed Site
                      </a>
                      <a
                        href="https://github.com/jennalala/NoSQLworkoutTracker"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Repository
                      </a>
                    </div>
                    <img
                      data-src="holder.js/200x200"
                      className="img-thumbnail img-responsive shadow float-left"
                      alt="200x200"
                      data-holder-rendered="true"
                    />
                  </div>
                </div>
              </main>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Portfolio;