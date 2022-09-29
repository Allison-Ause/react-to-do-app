import { useEffect, useState } from 'react';
import { getItems } from '../services/items';

export function useItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getItems();
      setItems(data);
    }
    fetchData();
  }, []);

  // DO I NEED A USE EFFECT TO PROTECT THE SERVICE? I THINK YES.

  // useEffect(() => {
  //   const addItem = async () => {};
  // }, []);

  return items;
}
