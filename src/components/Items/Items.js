import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useItems } from '../../hooks/useItems';
import { signOut } from '../../services/auth';
import Item from '../Item/Item';
import './Items.css';

export default function Items() {
  const items = useItems();
  const { user, setUser } = useContext(UserContext);
  const [currentItem, setCurrentItem] = useState('');

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

  const handleAddItem = async () => {
    setCurrentItem((e) => e.target.value);
  };

  return (
    <div>
      <div className="header">
        <span>{`Hey there, ${firstName}!`}</span>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <h1>Shopping List</h1>
      <label>
        Add New Item:
        <input type="text" value={currentItem} onChange={handleAddItem} />
      </label>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item key={item.id} {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
