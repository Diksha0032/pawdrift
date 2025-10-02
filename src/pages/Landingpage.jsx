import React from "react";
import Hkb from "../components/Hkb";
import Adopt from "../pages/Adopt";
import Petcard from "../components/Petcard";
import petsData from "../assets/pets.json"
import { Link } from "react-router-dom";

const Landingpage = () => {

  const kuchhi=petsData.pets.slice(0,3);

  return (
  <>
  <Hkb />
  <section className="bg-amber-300 p-6">
    <h2 className="text-white text-2xl text-center pb-3">Adopt Pets</h2>
    <div className="bg-amber-300 flex flex-wrap justify-center gap-6">
      {kuchhi.map((pet)=>(
        <Petcard key={pet.id} pet={pet}/>
      ))}
    </div>
    <div className="text-center mt-4">
      <Link to="/adopt">
      <button className="bg-amber-500 text-white px-6 py-2 rounded hover:bg-amber-600">See all pets</button></Link>
    </div>
  </section>
  </>
)
}

export default Landingpage;