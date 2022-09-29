import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { signOut } from '../../services/auth';
import './Items.css';

export default function Items() {
  const { user, setUser } = useContext(UserContext);

  if (!user) return <Redirect to="/auth/sign-in" />;

  const firstName =
    user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1);

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
    <div>
      <div className="header">
        <span>{`Hey there, ${firstName}!`}</span>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <h1>Shopping List</h1>
      <ul>Items:</ul>
    </div>
  );
}
