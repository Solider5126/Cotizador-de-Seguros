import { Fragment, useState } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
const Formulario = () => {
  const [error, setError] = useState(false);
  const { datos, handleChangeDatos, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError(true);
      return;
    }
    setError(false);
    cotizarSeguro();
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      {error && (
        <p className="text-center bg-red-700 p-2 rounded-lg text-white font-semibold">
          Todos los campos son obligatorios
        </p>
      )}
      <div className="my-4">
        <label
          htmlFor="marca"
          className="uppercase font-semibold text-gray-500 "
        >
          Marca
        </label>
        <select
          value={datos.marca}
          id="marca"
          name="marca"
          onChange={(e) => handleChangeDatos(e)}
          className="w-full mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        >
          <option value="">-- Selecciona la marca --</option>
          {MARCAS.map((marca) => (
            <option key={marca.id} value={marca.id}>
              {marca.nombre}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label
          htmlFor="year"
          className="uppercase font-semibold text-gray-500 "
        >
          Año
        </label>
        <select
          value={datos.year}
          id="year"
          name="year"
          onChange={(e) => handleChangeDatos(e)}
          className="w-full mt-3 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
        >
          <option value="">-- Selecciona la marca --</option>
          {YEARS.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="my-4">
        <label
          htmlFor="marca"
          className="uppercase font-semibold text-gray-500 "
        >
          Elige un Plan
        </label>
        <div className="flex gap-3 items-center my-2">
          {PLANES.map((plan) => (
            <Fragment key={plan.id}>
              <label htmlFor={plan.nombre}>{plan.nombre}</label>
              <input
                id={plan.nombre}
                type="radio"
                name="plan"
                value={plan.id}
                onChange={(e) => handleChangeDatos(e)}
              />
            </Fragment>
          ))}
        </div>
      </div>
      <input
        type="submit"
        className="w-full bg-blue-600 p-2 rounded-lg text-white font-bold hover:bg-blue-800 cursor-pointer"
        value={"Enviar"}
      />
    </form>
  );
};

export default Formulario;
