import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import "./page.scss";

import lazadi from "./img/lazadi.png";
import onprogress from "./img/onprogress.jpg";

export default class Page extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Fade top delay={300 * 4}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="content-box card">
                <h3>Lazadi</h3>
                <h5>
                  Language used: PHP <sup>(Framework: CodeIgniter 3)</sup>
                </h5>
                <hr class="border-bottom" />
                <img
                  src={lazadi}
                  alt="lazadi"
                  className="img-fluid img-responsive img"
                />
                <h6 className="mt-3">Description:</h6>
                <p className="text-justify">
                  Lazadi was made in 2020. The naming of Lazadi was taken as the
                  biggest e-commerce parody in Indonesia that doesn't exist
                  besides Lazada. Lazadi was built with this case study I gained
                  during the selection of case studies on the 'Web Program
                  lesson 2 'on campus. And until now I continue to develop it in
                  terms of frond-end and back-end.
                </p>
                <div className="justify-content-between">
                  <a
                    href="https://lazadi.000webhostapp.com/"
                    target="_blank"
                    className="btn btn-outline-primary btn-sm"
                    rel="noopener noreferrer"
                  >
                    Headed to Lazadi
                  </a>
                </div>
              </div>
            </div>
          </Fade>
          <Fade top delay={300 * 5}>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div className="content-box card">
                <h3>On Progress</h3>
                <h5>Language used: -</h5>
                <hr class="border-bottom" />
                <img
                  src={onprogress}
                  alt="lazadi"
                  className="img-fluid img-responsive img"
                />
                <h6 className="mt-3">Description:</h6>
                <p className="text-justify">-</p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
