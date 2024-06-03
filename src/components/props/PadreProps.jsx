/*
PASSARE STATO TRAMITE PROPS

Un componente padre può passare al figlio lo stato come props
Il componente figlio può accedere alle props ed utilizzare lo stato

ESEMPIO CONTATORE
PADRE -> Gestisce la logica
FIGLIO -> Visualizza il conteggio ed ha il pulsante
*/

import { useState } from "react";
import FiglioProps from "./FiglioProps";

export default function PadreProps() {
  // Preparo lo stato per il contatore
  const [contatore, setContatore] = useState(0);

  // Funzione che userà setContatore per aumentare il valore di contatore
  function incrementaContatore() {
    setContatore(contatore + 1);
  }

  return (
    <>
      <h2>Padre Props</h2>
      {/* TODO: Importeremo il componente figlio e gli passeremo la props relativa allo stato */}
      <FiglioProps
        contatore={contatore}
        incrementaContatore={incrementaContatore}
      />
    </>
  );
}
