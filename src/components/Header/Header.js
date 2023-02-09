
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../images/Logo.svg'
// import { AuthContext } from '../contexts/UserContext';
// import './Header.css'
// const Header = () => {
//     const { user, logOut } = useContext(AuthContext)
//     return (
//         <nav className='header'>
//             <img className='logo' src={logo} alt="" />
//             <div className='nav-bar '>
//                 <Link to="/">Shop</Link>
//                 <Link to="/orders">Orders</Link>
//                 <Link to="/inventory">Inventory</Link>
//                 <Link to="/about">About</Link>
//                 {
//                     user?.uid ?
//                         <button className='btn-logOut' onClick={logOut}>logOut</button>
//                         :
//                         <>
//                             <Link className='header-right' to="/login">Login</Link>
//                             <Link to="/signup">Signup</Link>
//                         </>

//                 }
//                 {/* <span>{user?.email}</span> */}
//             </div>
//         </nav>
//     );
// };

// export default Header;



import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    // const handleLogout = () => {
    //     logOut()
    //         .then(() => { })
    //         .catch(error => console.error(error.message))
    // }
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to={"/"}>Maisha's World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto bg-danger text-white">
                    <Nav.Link as={Link} to="/">Shop</Nav.Link>
                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                 <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
                 <Nav.Link as={Link} to="/about">About</Nav.Link>

                    </Nav>
                    <Nav>

                        {
                            user?.uid ?
                                                    <button className='btn-logOut' onClick={logOut}>logOut</button>
                                                   :
                                                   <>
                                                       <Nav.Link as={Link} className='header-right' to="/login">Login</Nav.Link>
                                                       <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
                                                    </>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;