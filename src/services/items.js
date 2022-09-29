// for fetch calls to database!

import { client } from './client';

export async function getItems() {
  const response = await client.from('list').select('id, item, quantity, bought');
  console.log('data from supabase', response.data);
  return response.data;
}
