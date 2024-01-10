import { useState } from "react";

import "./App.css";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import useCotizador from "./hooks/useCotizador";
import Spinner from "./components/Spinner";

function App() {
  const { cargando } = useCotizador();
  return (
    <>
      <header className="mx-3">
        <h1 className="text-center font-extrabold text-3xl py-3 text-white">
          Cotizador de Seguros de Auto
        </h1>
      </header>
      <main className="flex justify-center md:mt-40 mt-20">
        <div className="md:w-2/5 bg-white px-5 py-8 rounded-lg shadow">
          <Formulario />
          {cargando ? <Spinner /> : <Resultado />}
        </div>
      </main>
    </>
  );
}

export default App;
