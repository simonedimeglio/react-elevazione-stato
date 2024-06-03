export default function FiglioProps({ contatore, incrementaContatore }) {
  return (
    <>
      <h2>Figlio Props</h2>
      <p>Contatore: {contatore}</p>
      <button onClick={incrementaContatore}>Cliccami...</button>
    </>
  );
}
