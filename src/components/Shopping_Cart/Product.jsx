/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Product({ product, cart, setCart }) {
  const [amount, setAmount] = useState(0);

  function handleCart(NewAmount) {
    if (NewAmount === 0) {
      let newProducts = cart.filter(prod => prod.prod_id !== product.id);
      return setCart(newProducts);
    }
    // busco si el producto ya existe en el cart
    const findProduct = cart.find(prod => prod.prod_id === product.id)
    
    // si producto no existe agrego al cart
    if (!findProduct) return setCart([...cart, { "prod_id": product.id, "qty": NewAmount }]);

    // si producto existe no agrego sumo el nuevo monto
    const newCart = cart.map(p => {
      if (p.prod_id === findProduct.prod_id) {
        p.qty = NewAmount
        return p
      }
      return p
    })
    setCart(newCart)
  }

  return (
    <>
      <div className="product_card">
        <img
          className="product_img"
          src={product.image_url}
          alt={product.name}
        />
        <h5 className="product__name">{product.name}</h5>
        <span className="product__price">${(product.price).toFixed(2)}</span>
        <div className="product__buttons">
          <button className="button button--secondary button--sm"
            disabled={amount === 0 ? true : false}
            onClick={() => {
              if (amount === 0) return;
              setAmount(amount - 1);
              handleCart(amount - 1);
            }}
          >
            -
          </button>
          <span
            className={
              (amount > 0 && "product__button-violet") +
              " product__button-amount"
            }
          >
            {amount}
          </span>
          <button className="button button--secondary button--sm"
            onClick={() => {
              setAmount(amount + 1);
              handleCart(amount + 1);
            }}
          >
            +
          </button>
          <span className="product_category">{product.category}</span>
        </div>
      </div>
    </>
  );
}
