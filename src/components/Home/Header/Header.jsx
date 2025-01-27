import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Naver bar</h2>
            <nav>
                <span>My Website</span>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/users">Users</Link>
                <Link to="/posts">Posts</Link>
            </nav>
        </div>
    );
};

export default Header;