// import { useState } from "react";

export default function FiglioA({ nome, cambiaNome }) {
  // const [nome, setNome] = useState("Simon");

  function listenerCambiaNome() {
    cambiaNome("Lebon");
  }

  return (
    <>
      <h3>Figlio A</h3>
      <p>Il nome è: {nome}</p>
      <button onClick={listenerCambiaNome}>Cambia nome</button>
    </>
  );
}
