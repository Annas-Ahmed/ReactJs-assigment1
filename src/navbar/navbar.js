import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <Nav variant="pills" defaultActiveKey="/home" className="flex">
            <Nav.Item>
                <Nav.Link href="#">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Option 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navbar;