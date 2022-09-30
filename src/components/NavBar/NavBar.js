import { Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { signOut } from '../../services/auth';
import './NavBar.css';

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);

  const firstName =
    user?.email.split('@')[0].charAt(0).toUpperCase() + user?.email.split('@')[0].slice(1);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e.message);
    }
  };

  return (
    <nav>
      <div>
        {!user && (
          <div className="navbar auth-links">
            <Button mr="10px" colorScheme="white" variant="outline">
              <NavLink to="/auth/sign-in">Sign In</NavLink>
            </Button>
            <Button ml="10px" colorScheme="white" variant="outline">
              <NavLink to="/auth/sign-up">Sign Up</NavLink>
            </Button>
          </div>
        )}
        {user && (
          <div className="navbar header">
            <span>{`Hey there, ${firstName}!`}</span>
            <Button colorScheme="white" variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
