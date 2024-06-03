import { useContext } from "react";
import Contesto from "./Contesto";

export default function Utilizzatore() {
  const { username, password } = useContext(Contesto);

  return (
    <>
      <h3>Utilizzatore</h3>
      <p>Username: {username}</p>
      <p>Pass: {password}</p>
    </>
  );
}
