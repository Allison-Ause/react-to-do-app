import { useItems } from '../../hooks/useItems';
import { completeItem } from '../../services/items';
import './Item.css';

export default function Item({ id, item, bought }) {
  const { setItems } = useItems();
  //add bought & quantity to props when ready to handleBought

  const handleComplete = async () => {
    const itemToUpdate = { id, bought: !bought };
    console.log('Item inserted', item);
    const updatedItem = await completeItem(itemToUpdate);
    console.log('updatedItem', updatedItem);
    setItems((prevState) => [...prevState, updatedItem]);
  };
  return (
    <div>
      <span onDoubleClick={handleComplete} value={bought} className={bought ? 'bought' : ''}>
        {/* if true, left side returns */}
        {item}
      </span>
      {/* <span>{quantity}</span> */}
    </div>
  );
}
