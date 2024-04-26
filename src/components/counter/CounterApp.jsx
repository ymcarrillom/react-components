//Importa el hook useState de React para gestionar el estado local y la función randomBetween
import { useState } from "react";
import { randomBetween } from "../../utils/ramdom";


// Utiliza el hook useState para declarar una variable de estado llamada value inicializada 
// en 0. setValue es la función que se utilizará para actualizar el estado.
export default function CounterApp() {
  const [value, setValue] = useState(0);

  return (
    //Se incluye un título (<h2>Counter</h2>) y una descripción en un elemento p para explicar 
    //el propósito y funcionamiento del contador.
    <>
      <h2>Counter</h2>
      <p>
        Descripción: Este componente es un contador interactivo creado con
        React. Utiliza el hook useState para manejar el estado del valor del
        contador, que se inicializa en 0. El componente renderiza un título, una
        descripción y una serie de botones que permiten al usuario interactuar
        con el contador. Los botones permiten incrementar el contador en 1 o 10
        (+ y ++), decrementar el contador en 1 o 10 (- y --), restablecer el
        contador a 0 (reset), y establecer el contador a un valor aleatorio
        entre -20 y 20 (random). Cada botón tiene un controlador de eventos
        onClick que actualiza el estado del contador utilizando la función
        setValue. El valor actual del contador se muestra en un elemento{" "}
        <code>&lt;h4&gt;</code>. Cada vez que el estado del contador cambia, el
        componente se vuelve a renderizar, mostrando el nuevo valor del
        contador. Este componente es un ejemplo de cómo se puede manejar el
        estado y los eventos en una aplicación React para crear una interfaz de
        usuario interactiva. Es un buen punto de partida para aprender sobre los
        conceptos básicos de React.
      </p>
      <div className="counter">
        <div className="counter-container">
          <div className="counter__display">
            <p>Valor actual:</p>
            <h4>{value}</h4>
          </div>
          
          <div className="btn-counter">
            
            <button
              className="button button--secondary button--sm"
              onClick={() => {
                setValue(value + 1);
              }}
            >
              +
            </button>
            <button
              className="button button--secondary button--sm"
              onClick={() => {
                setValue(value + 10);
              }}
            >
              ++
            </button>
            <button
              className="button button--secondary button--sm"
              onClick={() => {
                setValue(0);
              }}
            >
              reset
            </button>
            <button
              className="button button--secondary button--sm"
              onClick={() => {
                setValue(value + randomBetween(-20, 20));
              }}
            >
              random
            </button>
            <button
              className="button button--secondary button--sm"
              onClick={() => {
                setValue(value - 1);
              }}
            >
              -
            </button>
            <button
              className="button button--secondary button--sm"
              onClick={() => {
                setValue(value - 10);
              }}
            >
              --
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
//Cada botón tiene un controlador de eventos onClick que utiliza la función setValue para actualizar el estado del
// contador en función de la acción correspondiente.