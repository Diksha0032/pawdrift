import React from "react"; 

const Navbar = () => {
  return(
    <>
    <nav className="bg-amber-400 flex items-center px-2 py-3 justify-between">
      <h1 className="text-2xl text-white">Pawdrift</h1>
    <div className="flex gap-3 text-white"> 
      <h2>Home</h2>
      <h2>Adopt</h2>
      <h2>Rescue</h2>
      <h2>Shop</h2>
      <h2>Profile</h2>
    </div>
    </nav>
    </>
  )
}

export default Navbar