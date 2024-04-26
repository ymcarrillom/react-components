/* eslint-disable react/prop-types */
import productos from "../../data/products.json"
import SummaryItem from "./SummaryItem";

function getProductById(id) {
  return productos.find(prod => prod.id === id)
}

function getTotal(cart) {
  if (cart.length === 0) return 0

  const prodsInCart = []
  cart.forEach(prod => {
    const { price } = getProductById(prod.prod_id)
    prodsInCart.push({ price, qty: prod.qty })
  })

  let result = 0
  prodsInCart.forEach(item => {
    result += item.qty * item.price
  })
  return result
}

export default function Summary({ cart }) {
  return (
    <>
      <div className="shopping_container">
        <div className="shopping_description">
          <br />
          {
            cart.length === 0 ?
              <p>Not product added</p>
              : cart.map(prod => {
                const product = getProductById(prod.prod_id)
                return <SummaryItem key={prod.prod_id} prod={product} qty={prod.qty} />
              })
          }
          <div className="summary__item summary__item--total">
            <p>Total</p><p>$ {(getTotal(cart)).toFixed(2)}</p>
          </div>
        </div>
        <button className="button full-width" disabled={cart.length === 0 ? true : false}>Submit Your Order</button>
      </div>
    </>
  );
}
