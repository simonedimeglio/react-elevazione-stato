import "./App.css";
import Contesto from "./components/react-context/Contesto";
import Utilizzatore from "./components/react-context/Utilizzatore";
// import AntenatoComune from "./components/elevazione/AntenatoComune";
// import PadreProps from "./components/props/PadreProps";

function App() {
  const dati = { theme: "Spongebob", password: "banana123" };

  return (
    <>
      <Contesto.Provider value={dati}>
        <h1>React State Lifting</h1>
        <hr />
        {/* <PadreProps />
      <hr /> */}
        {/* <AntenatoComune />
      <hr /> */}

        <Utilizzatore />
      </Contesto.Provider>
    </>
  );
}

export default App;
