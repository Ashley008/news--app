// import PropTypes from "prop-types";
import React from "react";

// export class Navbar extends Component {
//   static propTypes = {};
const Navbar = () => {

  // render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewSea.
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/general">
                    Home
                  </a>
                  {/* put in drop down in future */}
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/business">
                    Business</a></li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/entertainment">
                    Entertainment</a></li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/general">
                    General</a></li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/health">
                    Health</a></li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/science">
                    Science</a></li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/sports">
                    Sports</a></li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/technology">
                    Technology</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  // }
}

export default Navbar;
