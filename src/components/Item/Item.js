import { useItems } from '../../hooks/useItems';
import { completeItem, deleteItem } from '../../services/items';
import './Item.css';

export default function Item({ id, item, bought }) {
  const { setItems } = useItems();
  //add bought & quantity to props when ready to handleBought

  const handleComplete = async () => {
    const itemToUpdate = { id, bought: !bought };
    const updatedItem = await completeItem(itemToUpdate);
    setItems((prevState) => [...prevState, updatedItem]);
  };

  const handleDelete = async () => {
    await deleteItem({ id });
    // setItems((prevState) => [prevState.filter.splice(deletedItem)]);
    setItems((prevState) => [prevState.filter((deletedItem) => deletedItem.id !== id)]);
  };

  return (
    <div>
      <span
        onClick={handleComplete}
        onDoubleClick={handleDelete}
        value={bought}
        className={bought ? 'bought' : ''}
      >
        {/* if true, left side returns */}
        {item}
      </span>
    </div>
  );
}
