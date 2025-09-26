import React from "react"; 

const Navbar = () => {
  return(
    <>
    <nav className="mt-0 ml-0 bg-amber-400 flex items-center px-2 py-3 justify-between fixed w-full z-50">
      <h1 className="text-2xl text-white font-poppins font-semibold cursor-pointer hover:text-amber-700">Pawdrift</h1>
    <div className="flex gap-3 text-white font-roboto"> 
      <h2 className="font-semibold cursor-pointer hover:text-amber-700">Home</h2>
      <h2 className="font-semibold cursor-pointer hover:text-amber-700">Adopt</h2>
      <h2 className="font-semibold cursor-pointer hover:text-amber-700">Rescue</h2>
      <h2 className="font-semibold cursor-pointer hover:text-amber-700">Shop</h2>
      <h2 className="font-semibold cursor-pointer hover:text-amber-700">Profile</h2>
    </div>
    </nav>
    </>
  )
}

export default Navbar