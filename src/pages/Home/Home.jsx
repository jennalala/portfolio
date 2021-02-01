import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <body>
      <div className="container">
        <main className="row">
          <div className="col-sm-12">
            <div className="col-sm-12">
              <h1 style={{ color: "white" }}>About Me</h1>
              <img
                // src={Jenna}
                alt="Jenna La Francois"
              />

              <p className="text-justify">
              Oh, Hey! My name is Jenna. I'm a Software Developer in the making.
                I previously worked in veterinary care, medical billing and legal administration
                before taking the leap and diving into the world of technology.
                
                I reside in Sugar Hill, GA. 
                When I'm not learning something new in this industry 
                than you can find me painting, reading or being outdoors with my human child 
                and my adopted fuzzy child.
                I have an eye for small details and love to research.

              </p>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Home;