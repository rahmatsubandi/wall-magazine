import React from "react";
import Fade from "react-reveal/Fade";

import foot from "./img/foot.jpg";

export default function Footer() {
  return (
    <Fade bottom>
      <footer className="border-top p-3 foot">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-1">
              <img src={foot} alt="logo" className="logofoot" />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-auto">
              <h5>
                Handcrafted <span className="text-danger">❤</span> Rahmat
                Subandi
              </h5>
            </div>
            <div className="col-auto">
              <nav className="nav justify-content-end">
                <h5>2020</h5>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </Fade>
  );
}
