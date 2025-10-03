import React from "react";
import products from "../assets/products.json"
import { Link } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";

const Saman =({cart,setCart}) => {
  let total=0;
  for(let i=0;i<cart.length;i++){
    total+=cart[i].price*cart[i].qty;
  }

  const notify = () => toast("checkout success!")

  return(
    <div className="text-white bg-amber-300 p-5 flex ">
      <h1 className="text-white">Your Cart</h1>
      <Link to="/" className="text-white">Back to Shop</Link>

      {cart.length===0 ? (
        <p>Your cart is empty</p>
      ):(
        <>
        {cart.map((item)=>(
          <div key={item.id}
          className="flex justify-between">
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>Qty:{item.qty}</p>
            </div>
          </div>
        ))}

        <h3>Total: {total}</h3>

        <button className="bg-amber-400" onClick={()=>{
            notify();
            setCart([]);
        }}>Checkout</button>
        </>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default Saman;