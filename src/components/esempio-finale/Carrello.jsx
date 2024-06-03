export default function Carrello({ cart, totalCost }) {
  return (
    <>
      <h2>Carrello</h2>
      <p>Quantità di cose nel carrello: {cart.length}</p>
      <p>Prezzo tot: {totalCost}</p>
    </>
  );
}
