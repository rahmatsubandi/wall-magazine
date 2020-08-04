import React from "react";
import Fade from "react-reveal/Fade";

import foot from "./img/foot.jpg";
import github from "./img/github.png";

export default function Footer() {
  return (
    <Fade>
      <footer className="border-top p-3 foot">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-1">
              <img src={foot} alt="logo" className="logofoot" />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto pt-3">
              <h5>
                Handcrafted <span className="text-danger">❤</span> Rahmat
                Subandi
              </h5>
            </div>
            <div className="col-auto">
              <div className="justify-content-end">
                <a
                  href="https://github.com/rahmatsubandi"
                  className="text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={github} alt="github" style={{ width: 70 }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
