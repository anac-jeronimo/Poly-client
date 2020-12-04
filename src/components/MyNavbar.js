
import AuthService from '../utils/auth';
import React, { useState } from 'react';
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
} from 'reactstrap';
import { button } from 'reactstrap';

const MyNavbar = (props) => {
    

    const logoutUser = () => {
        const authService = new AuthService();
        authService.logout()
            .then(() => {
                this.props.setCurrentUser(null);
                localStorage.removeItem("loggedInUser");
            })
    }

        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
    

    
        if(props.loggedInUser) {
            return (
                <div>
                  <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Poly</NavbarBrand>
                     <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar> 
                      <Nav className="mr-auto" navbar>
                        <NavItem>
                          <NavLink href="/profile/">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink href="/logout">Logout</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav caret>
                            Learn More
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>
                              Color Theory
                            </DropdownItem>
                            <DropdownItem>
                              Color Blind Codes
                            </DropdownItem>
                            <DropdownItem>
                              Facts about color blindness
                            </DropdownItem>
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
                  <Navbar color="light" light expand="md">
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
                        <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav caret>
                            Learn More
                          </DropdownToggle>
                          <DropdownMenu right>
                            <DropdownItem>
                              Color Theory
                            </DropdownItem>
                            <DropdownItem>
                              Color Blind Codes
                            </DropdownItem>
                            <DropdownItem>
                              Facts about color blindness
                            </DropdownItem>
                            <DropdownItem>
                              Credits
                              </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Nav>
                    </Collapse>
                  </Navbar>
                </div>
          )
        }    
    }

export default MyNavbar;