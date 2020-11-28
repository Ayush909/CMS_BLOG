import React from 'react'
import {Navbar,Form,FormControl,NavDropdown, Nav, Button} from 'react-bootstrap'

function Header() {

    

    return (
        
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect sticky="top">
        <Navbar.Brand href="/">Blog</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="mr-auto">
           
           <Nav.Link href="/category/5fbbcd3095d53429548e2567 ">Business</Nav.Link>
            <Nav.Link href="/category/5fbbcd4e95d53429548e2568">Environment</Nav.Link>
            <Nav.Link href="/category/5fbbcd2695d53429548e2566">Science</Nav.Link>
            <Nav.Link href="/category/5fbbcd0a7c91ad063c0a0204">Technolgy</Nav.Link>
                    
            
            

            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#">JavaScript</NavDropdown.Item>
              <NavDropdown.Item href="#">SDLC</NavDropdown.Item>
              <NavDropdown.Item href="#">HTML</NavDropdown.Item>
              <NavDropdown.Item href="#">CSS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Frameworks</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button className="search_btn">Search</Button>
          </Form>

        </Navbar.Collapse>

      </Navbar>
    )
}

export default Header
