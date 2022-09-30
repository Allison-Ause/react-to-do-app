import { SmallAddIcon } from '@chakra-ui/icons';
import { Button, Input, List, ListItem } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { useItems } from '../../hooks/useItems';

import { addItem } from '../../services/items';
import Item from '../Item/Item';
import './Items.css';

export default function Items() {
  const { items, setItems } = useItems();
  const { user } = useContext(UserContext);
  const [currentItem, setCurrentItem] = useState('');

  if (!user) return <Redirect to="/auth/sign-in" />;

  const handleAddItem = async () => {
    const addedItem = await addItem(currentItem);
    setItems((prevState) => [...prevState, addedItem]);
    setCurrentItem('');
  };

  return (
    <div>
      <h1 className="title">Shopping List</h1>
      <label>
        <Input
          placeholder="new item"
          size="md"
          w="450px"
          type="text"
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
        />
        <Button
          leftIcon={<SmallAddIcon />}
          colorScheme="teal"
          size="md"
          variant="ghost"
          onClick={handleAddItem}
        >
          Add Item
        </Button>
      </label>
      <div className="container">
        <List w="450px" spacing={3}>
          {items.map((item) => (
            <ListItem key={item.id}>
              <Item key={item.id} {...item} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
