import { useCallback, useRef } from "react";
import { MARCAS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";

const Resultado = () => {
  const { resultado, datos } = useCotizador();
  const yearRef = useRef(datos.year)

  if (resultado === "") return null;

  const [nombreMarca] = useCallback(
    MARCAS.filter((m) => m.id === Number(datos.marca)),
    [resultado]
  );

  const [nombrePlan] = useCallback(
    PLANES.filter((p) => p.id === Number(datos.plan)),
    [resultado]
  );

  console.log(nombreMarca);
  return (
    <div className="bg-blue-800 rounded-lg  text-center mt-4 p-4 shadow font-semibold text-white">
      <h2 className="text-2xl font-mono">Resumen</h2>
      <p className="font-extrabold text-red-500">
        Marca :{" "}
        <span className="font-medium text-green-500">{nombreMarca.nombre}</span>
      </p>
      <p className="font-extrabold text-red-500">
        Plan :{" "}
        <span className="font-medium text-green-500">{nombrePlan.nombre}</span>
      </p>
      <p className="font-extrabold text-red-500">
        Año del Auto :{" "}
        <span className="font-medium text-green-500">{yearRef.current}</span>
      </p>
      <p className="font-extrabold text-red-500">
        Total Cotización :{" "}
        <span className="font-medium text-green-500">{resultado}</span>
      </p>
    </div>
  );
};

export default Resultado;
