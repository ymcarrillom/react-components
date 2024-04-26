import { useState } from "react";
import Product from "./Product";
import Summary from "./Summary";
import products from "../../data/products.json";
//Utiliza el hook useState para declarar una variable de estado llamada cart inicializada como un array vacío
export default function ShoppingCartApp() {
  // los id de los productos.
  const [cart, setCart] = useState([]);
  // cart [{prod_id: 1, qty: 2}, ...]

  //El componente se renderiza dentro de un fragmento (<>...</>) y contiene una estructura HTML que 
  //representa la interfaz del carrito de compras.
  return (
    <>
      <h2>Shopping Cart</h2>
      <p>
        Descripción: El componente "Shopping Cart" ha sido construido de manera
        cuidadosa con React para brindar una experiencia de compra online sin
        contratiempos. En su estructura, se emplea el estado local y el hook
        useState para gestionar el carrito de compras, permitiendo a los
        usuarios ajustar la cantidad de cada producto mediante botones de
        incremento y decremento. Cada artículo se presenta de forma atractiva
        con su imagen, nombre, precio y categoría, facilitando la exploración de
        la lista de productos disponibles.
        <br />
        <br />
        Este componente también integra un resumen dinámico que despliega
        detalles esenciales como el nombre del producto, la cantidad, el precio
        por unidad y el costo total. Cuando el carrito está vacío, se muestra un
        mensaje claro indicando "No products", y el botón de "Submit Your Order"
        se deshabilita, ofreciendo una navegación intuitiva y una presentación
        clara de la información clave.
        <br />
        <br />
        Esta implementación pone de manifiesto la capacidad de React para crear
        interfaces amigables y funcionales, asegurando una experiencia de
        usuario sencilla y una presentación nítida de la información esencial
        durante el proceso de compra.
      </p>
      <br />
      <br />
      <div className="shopping__main">
        <div className="shopping__main__list">
          <h2 className="sub-title">List of Products</h2>
          <br />
          <div className="product_list">
            {products.map((product) => (
              <Product
                product={product}
                cart={cart}
                setCart={setCart}
                key={product.id}
              />
            ))}
          </div>
        </div>
        <div className="shooping__main__summary">
          <h2 className="sub-title">Shopping Cart</h2>
          <Summary cart={cart} />
        </div>
      </div>
    </>
  );
}
