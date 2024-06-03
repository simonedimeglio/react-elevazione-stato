import "./App.css";
import ListaProdotti from "./components/esempio-finale/ListaProdotti";
// import Contesto from "./components/react-context/Contesto";
// import Utilizzatore from "./components/react-context/Utilizzatore";
// import AntenatoComune from "./components/elevazione/AntenatoComune";
// import PadreProps from "./components/props/PadreProps";

function App() {
  // const dati = { theme: "Spongebob", password: "banana123" };

  return (
    <>
      <h1>React State Lifting</h1>
      <hr />
      <ListaProdotti />
      {/* <PadreProps />
          <hr /> */}
      {/* <AntenatoComune />
          <hr /> */}
      {/* <Contesto.Provider value={dati}>
          <Utilizzatore />
        </Contesto.Provider> */}
    </>
  );
}

export default App;
