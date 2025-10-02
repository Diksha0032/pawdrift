import React from "react";
import petsData from "../assets/pets.json"
import { Link } from "react-router-dom";

const Petcard = ({pet}) =>{
  return (
    <div className="bg-amber-400 shadow-md rounded-xl p-4 w-60 h-80">
      <img src={pet.image} 
      alt={pet.name}
      className="w-full h-35 object-cover rounded-xl" />
      <h2 className="text-lg font-semibold mt-3">{pet.name}</h2>
      <p className="text-gray-600 text-sm">{pet.type} - {pet.breed}</p>
      <p className="text-gray-600 text-sm">Age: {pet.age}</p>
      <p className="text-gray-600 text-sm">Location: {pet.location}</p>
      <Link to={`/adopt/${pet.id}`}>
      <button  className="mr-3 mt-2 w-full bg-amber-400 text-white text-semibold py-2 rounded-lg hover:bg-amber-500 justify-center items-center">Adopt</button></Link>
    </div>
    
  )
}

export default Petcard