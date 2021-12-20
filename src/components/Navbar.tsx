import { Link } from 'react-router-dom';

// navbar component
// navigate to different pages
export default function Navbar() {
  return (
    <nav className='nav'>
      <ul className='nav-menu'>
        <Link className='nav-link' to='/home'>
          Home
        </Link>
        <Link className='nav-link' to='/'>
          Todo
        </Link>
        <Link className='nav-link' to='/info'>
          Info
        </Link>
      </ul>
    </nav>
  );
}
