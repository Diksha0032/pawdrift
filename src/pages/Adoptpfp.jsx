import { useParams } from "react-router-dom";
import petsData from "../assets/pets.json"
import {useState} from "react";
import { ToastContainer ,toast} from "react-toastify";

const Adoptpfp = () => {
  const {id}= useParams();
  const pet=petsData.pets.find((p) => p.id.toString() === id);

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    address:"",
  })

   const notify = () => toast("Application for adoption filled!")

  const handleChange = (e) => 
    setFormData({...formData,[e.target.name]:e.target.value});
  
    const handleSubmit = (e) => {
    e.preventDefault();
    const existing=JSON.parse(localStorage.getItem("adoptions")) || [];

    localStorage.setItem("adoptions",JSON.stringify([...existing,{...formData,petId:pet.id}]))

    setFormData({name:"",email:"",phone:"",address:""})

    notify();
    }

    if (!pet) {
  return <p className="text-center mt-10 text-red-500">Pet not found!</p>;
}


    return (
      <div className=" bg-amber-300 flex flex-col lg:flex-row gap-10 p-5">
        <div className="lg:w-1/2">
        <h1 className="text-3xl">{pet.name}</h1>
        <img 
        src={pet.image}
        alt={pet.name}
        className="w-50 h-50 object-cover m-4"/>
        <p>Breed: {pet.breed}</p>
        <p>Age: {pet.age}</p>
        <p>Gender: {pet.gender}</p>
        <p>Location: {pet.location}</p>
        <p>Vaccinated: {pet.vaccinated}</p>
        <p>Status: {pet.status}</p>
        <p></p>
        </div>

        <div className="lg:w-1/2">
        <h2 className="text-2xl mb-4">Adopt {pet.name}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
          name="name"
          placeholder="your name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          />
          <input 
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          />
          <input 
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          />
          <textarea 
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          />
          <button 
          type="submit"
          className="bg-amber-400 px-4 py-2 rounded hover:bg-amber-500">Submit Application</button>
        </form>
        </div>
              <ToastContainer position="top-center" autoClose={3000} />

      </div>
    )
}

export default Adoptpfp;
