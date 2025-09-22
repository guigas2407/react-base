import { Nav } from './styled';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';

export default function Header() {
  return (
    <Nav>
      <a href="">
        <FaHome size={24} />
      </a>
      <a href="">
        <FaUserAlt />
      </a>
      <a href="">
        <FaSignInAlt />
      </a>
    </Nav>
  );
}
