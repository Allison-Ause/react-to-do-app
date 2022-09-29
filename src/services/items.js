// for fetch calls to database!

import { client } from './client';

export async function getItems() {
  const response = await client
    .from('list')
    .select('id, item, quantity, bought')
    .order('created_at', { ascending: false });
  return response.data;
}

export async function addItem(currentItem) {
  const response = await client.from('list').insert({ item: currentItem }).single();
  console.log('response from addItem', response.data);
  return response.data;
}
