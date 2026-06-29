import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "@assets/images/logo.svg";

interface HeaderState {
  isSticky: boolean;
}

export default class Header extends Component<{}, HeaderState> {
  state: HeaderState = {
    isSticky: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      isSticky: window.scrollY > 80,
    });
  };

  render() {
    const links = [
      { title: "Features", to: "#features" },
      { title: "Pricing", to: "#pricing" },
      { title: "Testimonial", to: "#testimonial" },
      { title: "Help", to: "#help" },
    ];

    const loginMenu = [
      { title: "Sign in", to: "#" },
      { title: "Sign up", to: "#" },
    ];

    return (
      <Navbar
        expand="lg"
        className={`main-navbar ${this.state.isSticky ? "sticky-navbar" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="LaslesVPN" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto menu_nav">
              {links.map((link) => (
                <Nav.Link href={link.to} key={link.to}>
                  {link.title}
                </Nav.Link>
              ))}
            </Nav>

            <Nav className="ms-auto menu_nav">
              {loginMenu.map((link) => (
                <Nav.Link
                  href={link.to}
                  key={link.title}
                  className={link.title === "Sign up" ? "signup-link" : ""}
                >
                  {link.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}