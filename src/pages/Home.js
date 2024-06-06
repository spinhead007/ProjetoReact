import React from "react";
import Componente2 from "../components/Componente2";
import Componente1 from "../components/Componente1";

function Home() {
  return (
    <div>
      <h1>Marco Aurelio de Lima Vieira</h1>
      <div>
        <span>Projeto React</span>
        <h2>Curitiba 2024</h2>
        <Componente1 />
        <Componente2 />
      </div>
    </div>
  );
}

export default Home;