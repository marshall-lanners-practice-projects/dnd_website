import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <NavLink className='navbar-brand' to='/'>
          D&D Campaign
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink to='/session-log' className='nav-link'>
                Session Log
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/Resources' className='nav-link'>
                DnD Resources
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                The World
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Artwork</DropdownItem>
                <DropdownItem>Party's Story</DropdownItem>
                <DropdownItem>Map</DropdownItem>
                <DropdownItem>Cities</DropdownItem>
                <DropdownItem>History</DropdownItem>
                <DropdownItem>Calendar</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
