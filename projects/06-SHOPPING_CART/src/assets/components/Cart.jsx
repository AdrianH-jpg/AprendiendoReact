import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";


export function CartItem({ thumbnail, price, tilte, quantity, addToCart }) {
    return (
        <li>
            <img src={thumbnail}
                alt={tilte}/>
            <div>
                <strong>{tilte}</strong> - ${price}
            </div>

            <footer>
                <small>
                    qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return(
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden></input>

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem key={product.id}
                        addToCart={() => addToCart(product)}
                        {...product}/>
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
    
}