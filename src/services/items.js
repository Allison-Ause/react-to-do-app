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
  return response.data;
}

export async function completeItem(item) {
  const response = await client
    .from('list')
    .update({ bought: item.bought })
    .match({ id: item.id })
    .single();
  return response.data;
}

export async function deleteItem({ id }) {
  const response = await client.from('list').delete().match({ id }).single();
  return response.data;
}
