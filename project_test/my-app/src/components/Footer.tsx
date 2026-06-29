import { Component } from 'react'
import logo from "@assets/images/logo.svg";
import facebook from "@assets/images/facebook.svg";
import whatsapp from "@assets/images/whatsapp.svg";
import youtube from "@assets/images/youtube.svg";

export default class Footer extends Component {
  render() {
    return (
<footer className="footer" id="help">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4">
            <img src={logo} alt="LaslesVPN" className="footer__logo" />

            <p className="footer__text">
              Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh
              arcu id purus ullamcorper. Vel vel erat semper augue.
            </p>

            <div className="footer__social">
              <a href="#"><img src={facebook} alt="Facebook" /></a>
              <a href="#"><img src={whatsapp} alt="Whatsapp" /></a>
              <a href="#"><img src={youtube} alt="Youtube" /></a>
            </div>
          </div>

          <div className="col-lg-2 offset-lg-2 col-md-4">
            <h5>Product</h5>
            <ul>
              <li><a href="#">Download</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Server</a></li>
              <li><a href="#">Countries</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4">
            <h5>Engage</h5>
            <ul>
              <li><a href="#">LaslesVPN?</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms of service</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4">
            <h5>Earn money</h5>
            <ul>
              <li><a href="#">Become partner</a></li>
              <li><a href="#">Affiliate</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
