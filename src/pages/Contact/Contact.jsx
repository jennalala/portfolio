import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <body>
      <div className="container">
        <main className="row">
          <div className="col-sm-12">
            <div className="col-sm-12">
              <h1>Contact</h1>

              <div className="contact">
                <h4>Name</h4>
                <p>Jenna La Francois</p>

                <h4>E-mail</h4>
                <p>jenna.lafrancois@gmail.com</p>

                <h4>Phone</h4>
                <p>(914)246-9072</p>

                <h4>GitHub</h4>
                <a
                  href="https://github.com/jennalala"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  https://github.com/jennalala
                </a>

                <h4>LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/jenna-lafrancois/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                https://www.linkedin.com/in/jenna-lafrancois/
                </a>

                <h4>Resume</h4>
                <a
                  href="https://docs.google.com/document/d/1ONsuN3JFdji_mnV7Gxnpx_Jg9yUQzYGZGQ3luCzy0iU/edit?usp=sharing"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                    https://docs.google.com/document/d/1ONsuN3JFdji_mnV7Gxnpx_Jg9yUQzYGZGQ3luCzy0iU/edit?usp=sharing
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Contact;