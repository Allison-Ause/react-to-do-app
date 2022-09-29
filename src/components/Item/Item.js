export default function Item({ item }) {
  //add bought & quantity to props when ready to handleBought
  return (
    <div>
      <span>{item}</span>
      {/* <span>{quantity}</span> */}
    </div>
  );
}
