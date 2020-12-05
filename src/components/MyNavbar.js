import AuthService from "../utils/auth";
import React, { useState } from "react";
import { Button } from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const MyNavbar = (props) => {
  const logoutUser = () => {
    const authService = new AuthService();
    authService.logout().then(() => {
      props.setCurrentUser(null);
      localStorage.removeItem("loggedInUser");
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  if (props.loggedInUser) {
    return (
      <div>
        <Navbar className="myNavbar" color="light" light expand="md">
          <NavbarBrand href="/">Poly</NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/profile/">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" onClick={logoutUser}>
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/scan">Scan</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Learn More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem> Color Theory</DropdownItem>
                  <DropdownItem>Color Blind Codes</DropdownItem>
                  <DropdownItem>Facts about color blindness</DropdownItem>
                  Credits
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar className="myNavbar" color="light" light expand="md">
          <NavbarBrand href="/">Poly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login-google">Login with Google</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Learn More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <NavItem>
                <NavLink href="/colortheory">Color theory</NavLink>
              </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                  <NavItem>
                <NavLink href="/colorcodes">Color Blind Codes</NavLink>
              </NavItem>                 
                  </DropdownItem>
                  <DropdownItem>
                  <NavItem>
                <NavLink href="/facts">Facts about color blindness</NavLink>
              </NavItem>                 
                  </DropdownItem>
                  <DropdownItem>
                  <NavItem>
                <NavLink href="/credits">Credits</NavLink>
              </NavItem>
              </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
};

export default MyNavbar;

