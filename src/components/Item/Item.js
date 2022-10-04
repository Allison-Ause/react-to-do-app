// import { useItems } from '../../hooks/useItems';
import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { completeItem, deleteItem } from '../../services/items';
import { getItems } from '../../services/items';
import './Item.css';

export default function Item({ id, item, bought, setItems }) {
  // const { setItems } = useItems();

  const handleComplete = async () => {
    const itemToUpdate = { id, bought: !bought };
    const updatedItem = await completeItem(itemToUpdate);
    setItems((prevState) =>
      prevState.map((currentItem) =>
        currentItem.id === updatedItem.id ? updatedItem : currentItem
      )
    );
  };

  const handleDelete = async () => {
    await deleteItem({ id });
    setItems(await getItems());
    // (prevState) => [prevState.filter((deletedItem) => deletedItem.id !== id)]
    // ^^ for local state updates.
  };

  return (
    <div className="item-line">
      <span onClick={handleComplete} value={bought} className={bought ? 'bought' : ''}>
        {/* if true, left side returns */}
        {item}
      </span>
      <IconButton
        aria-label="Delete Item"
        icon={<DeleteIcon />}
        variant="ghost"
        colorScheme="teal"
        onClick={handleDelete}
      />
    </div>
  );
}
