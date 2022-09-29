import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useItems } from '../../hooks/useItems';
import { signOut } from '../../services/auth';
import { addItem } from '../../services/items';
import Item from '../Item/Item';
import './Items.css';

export default function Items() {
  const { items, setItems } = useItems();
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
    const addedItem = await addItem(currentItem);
    setItems((prevState) => [...prevState, addedItem]);
    setCurrentItem('');
  };

  return (
    <div>
      <div className="navbar header">
        <span>{`Hey there, ${firstName}!`}</span>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      <h1>Shopping List</h1>
      <label>
        Add New Item:
        <input type="text" value={currentItem} onChange={(e) => setCurrentItem(e.target.value)} />
        <button onClick={handleAddItem}>Add Item</button>
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
