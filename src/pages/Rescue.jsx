import {useState} from "react";
import { ToastContainer ,toast} from "react-toastify";

const Rescue = () => {

  const [formData,setFormData] = useState({
    name:"",
    age:"",
    breed:"",
    rescuedBy:"",
    ngo:"",
    contactInfo:"",
    story:"",
  })

   const notify = () => toast("Rescued pet application submitted!")

  const handleChange = (e) => 

    setFormData({...formData,[e.target.name]:e.target.value});
  
    const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({name:"",
    age:"",
    breed:"",
    rescuedBy:"",
    ngo:"",
    contactInfo:"",
  story:"",})

    notify();
    }

    return (
      <div className="min-h-screen font-semibold border-gray text-white bg-amber-300 p-5 flex flex-col justify-center">
        <div className="w-full max-w-md"><h2 className="text-2xl mt-10 mb-3text-center">Submit rescued pet for adoption</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-3">
          <input 
          name="name"
          placeholder="pet name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          />
          <input 
          name="age"
          placeholder="age"
          value={formData.age}
          onChange={handleChange}
          className="border p-2 rounded"
          />
          <input 
          name="breed"
          placeholder="breed"
          value={formData.breed}
          onChange={handleChange}d
          className="border p-2 rounded"
          />
          <input 
          name="rescuedBy"
          placeholder="Rescued by individual or ngo"
          value={formData.rescuedBy}
          onChange={handleChange}
          required
          className="border p-2 rounded"
          />
          <input 
          name="ngo"
          placeholder="ngo name (opt)"
          value={formData.ngo}
          onChange={handleChange}
          className="border p-2 rounded"
          />
          <input 
          name="contactinfo"
          placeholder="contact info"
          value={formData.contactInfo}
          onChange={handleChange}
          className="border p-2 rounded"
          />
          <textarea 
          name="story"
          placeholder="tell about how you rescued the pet"
          value={formData.story}
          onChange={handleChange}
          className="border p-2 rounded"
          />
          <button 
          type="submit"
          className="bg-amber-400 px-4 py-2 rounded hover:bg-amber-500">Submit Application</button>
        </form>
       
              <ToastContainer position="top-center" autoClose={3000} />
       </div>
      </div>
    )
}

export default Rescue;
