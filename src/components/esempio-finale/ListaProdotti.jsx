import { useState } from "react";
import Carrello from "./Carrello";

export default function ListaProdotti() {
  const prodotti = [
    { id: 1, nome: "Telefono", price: 1000 },
    { id: 2, nome: "Cuffie", price: 300 },
  ];

  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  function addToCart(prodotto) {
    const myCart = [...cart, prodotto];
    setCart(myCart);
    setTotalCost(totalCost + prodotto.price);
  }

  return (
    <>
      <h1>Lista Prod.</h1>
      {/* Lista dei prodotti con pulsante per aggiungere al carrello */}
      <ul>
        {prodotti.map((prodotto) => (
          <li key={prodotto.id}>
            {prodotto.nome} - costo: {prodotto.price}
            <button onClick={() => addToCart(prodotto)}>
              Aggiungi al carrello
            </button>
          </li>
        ))}
      </ul>
      <Carrello cart={cart} totalCost={totalCost} />
    </>
  );
}
