import { useState } from "react";
import FiglioA from "./FiglioA";
import FiglioB from "./FiglioB";

export default function AntenatoComune() {
  const [nome, setNome] = useState("Simon"); // Stato elevato: prima era del FiglioA.jsx

  function cambiaNome(nuovoNome) {
    setNome(nuovoNome);
  }

  return (
    <>
      <h2>Antenato Comune</h2>
      <FiglioA nome={nome} cambiaNome={cambiaNome} />
      <FiglioB nome={nome} />
    </>
  );
}
