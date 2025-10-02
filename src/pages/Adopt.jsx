import React from "react";
import petsData from "../assets/pets.json"
import Petcard from "../components/Petcard";

const Adopt = () =>{
  return  (
       <section className='bg-amber-300 px-6 pt-0 pb-0'>
        <h2 className='text-white text-2xl font-semibold text-center pb-3'>Adopt a Pet</h2>
      <div className='py-5 bg-amber-300 flex flex-wrap justify-center gap-6'>
        {petsData.pets.map((pet)=>(
          <Petcard key={pet.id} pet={pet} />
        ))}
      </div>
      </section>
  )
}

export default Adopt;