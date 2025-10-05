import React from "react";
import products from "../assets/products.json";
import { Link } from "react-router-dom";


const Dukan = ({ cart, setCart }) => {
   function addToCart(product) {
    let newCart = [...cart];
    let found = false;

    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === product.id) {
        newCart[i].qty += 1;
        found = true;
        break;
      }
    }

    if (found === false) {
      newCart.push({ ...product, qty: 1 });
    }

    setCart(newCart);

  }

  function incQty(id) {
    let newCart = [...cart];
    for (let i = 0; i < newCart.length; i++) {
      if (newCart[i].id === Number(id)) {
        newCart[i].qty += 1;
        break;
      }
    }
    setCart(newCart);
  }

  function decQty(id){
    let newCart =[...cart];
    for(let i=0;i<newCart.length;i++){
      if(newCart[i].id===id){
        newCart[i].qty-=1;

        if(newCart[i].qty<=0){
          newCart.splice(i,1);
        }
        break;
      }
    }
    setCart(newCart);
  }

  function cartKaCount(){
    let total=0;
    for(let i=0;i<cart.length;i++){
      total+=cart[i].qty;
    }
    return total;
  }

  return (
    <div className="bg-amber-300">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white text-2xl">Pets Dukaan</h1>
        <Link to="/cart">
          <button className="bg-amber-400 text-white justify-right px-4 py-2 rounded">
            View Cart : {cartKaCount()}
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        {products.products.map((product)=>{
          let inCart=cart.find(p=>p.id===product.id);
          return(
            <div key={product.id} className="border-white flex flex-col md:flex-row lg:flex-row items-center gap-4 p-4 ml-3 mr-3 border rounded">
              <img src={product.images[0]} alt={product.name} className="w-full md:w-1/3 h-auto object-cover rounded" />
              
              <div className="text-white flex-1 flex flex-col gap-2">
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <p>{product.description}</p>
              
              {!inCart?(
                <button onClick={()=> addToCart(product)} className="bg-amber-400 mt-2 px-4 py-2 bg-amber-300 text-white rounded">Add to cart</button>):(
                  <div className="mt-2 flex flex-row items-center gap-2">
                    <button onClick={()=> decQty(product.id)} className="mt-2 px-4 bg-amber-400 text-gray-700 rounded">-</button>
                    <span className="item-center mt-2">{inCart.qty}</span>
                    <button onClick={()=> incQty(product.id)} className="mt-2 px-4 bg-amber-400 text-gray-700 rounded">+</button>
                    </div>
                )
              
              }
              
              </div>
              </div>
          )
        })}
        </div>
    </div>
  )

}

export default Dukan;