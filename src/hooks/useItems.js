import { useEffect, useState } from 'react';
import { getItems } from '../services/items';

export function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getItems();
      console.log('data', data);
      setItems(data);
    }
    fetchData();
  }, []);
  console.log(items);
  return items;
}
