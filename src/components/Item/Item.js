export default function Item({ item, quantity }) {
  //add bought to props when ready to handleBought
  return (
    <div>
      <span>{item}</span>
      <span>{quantity}</span>
    </div>
  );
}
