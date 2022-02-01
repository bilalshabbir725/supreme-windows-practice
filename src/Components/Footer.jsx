import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

import { routes } from "../utils";

export const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-6 py-3">
              <div className="h4 text-center">Windows</div>
              <hr />
              <div className="row">
                <div className="col-md-6 py-3">
                  <div className="h6 text-center font-weight-bold ">
                    Options
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.upvc}
                        className="text-decoration-none text-white stretched-link"
                      >
                        uPVC
                      </Link>
                    </li>
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.timber}
                        className="text-decoration-none text-white stretched-link"
                      >
                        Timber
                      </Link>
                    </li>
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.aluminium}
                        className="text-decoration-none text-white stretched-link"
                      >
                        Aluminum
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6 py-3">
                  <div className="h6 text-center font-weight-bold">Styles</div>
                  <ul className="list-group list-group-flush">
                    {/* <hr /> */}
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.casement}
                        className="text-decoration-none text-white stretched-link"
                      >
                        Casement
                      </Link>
                    </li>
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.sash}
                        className="text-decoration-none text-white stretched-link"
                      >
                        Sash
                      </Link>
                    </li>
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.secondary}
                        className="text-decoration-none text-white stretched-link"
                      >
                        Secondary
                      </Link>
                    </li>
                    <li className="list-group-item bg-dark text-white border-light">
                      <Link
                        to={routes.tiltnturm}
                        className="text-decoration-none text-white stretched-link"
                      >
                        Tilt & Turn
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 py-3">
              <div className="h4 text-center">Doors</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.doors}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Main
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.doors}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Living Room
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.doors}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Furniture
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.doors}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Lightweight Tiled
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h4 text-center">Conservatories</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.conservatories}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Main
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.conservatories}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Living Room
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.conservatories}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Furniture
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to={routes.conservatories}
                    className="text-decoration-none text-white stretched-link"
                  >
                    Lightweight Tiled
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <div className="row  py-3">
            <div className="col display-6">
              <IconTelephone /> +1800 100 1000
            </div>
            <div className="col display-6">
              <IconEnvelope /> info@supremewindow.com
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};
