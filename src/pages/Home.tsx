import "./Home.css";
import { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Home() {
  const [contador, setContador] = useState<number>(0);

  function btnClick() {
    setContador(contador + 1);
  }

  return (
    <>
      <Header title="Contador" />

      <div>
        <button onClick={btnClick}>Click me</button>
      </div>

      <p>{contador} cliques!</p>

      <Link to="/cadastro">
        Cadastro de Cliente
      </Link>

      <footer>
        Feito com ♥ by Larissa.
      </footer>
    </>
  );
}

export default Home;