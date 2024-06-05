"use client"
//import "../style/globals.css";
import {useState} from "react"
import { useRouter } from "next/navigation";


export default function FormApply({id}) {
 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cv: ''
      });
      
    const router = useRouter();
    const handleSubmit = async(e) => {;
        e.preventDefault();
        if(!formData.name || !formData.email || !formData.cv){
          return alert("Plese All Fields Are Requiered ")
        }
        const response= await fetch('https://jopsearch-backend.onrender.com/applyer/'+id, {
          method: 'POST',
          body: JSON.stringify({
            name:formData.name,
            email: formData.email,
            cv:formData.cv,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      const result= await response.json();
      console.log(result);
      window.location.reload()
      //router.push('/')
      };
   
  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
    <label>
      Name:
      <input className="input-name"
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({  ...formData,name: e.target.value })}
      />
    </label>
    <label>
      Email:
      <input className="input-email"
        type="text"
        value={formData.email}
        onChange={(e) => setFormData({  ...formData,email: e.target.value })}
      />
    </label>
    <label>
      URL Of CV:
      <input className="input-cv"
        type="text"
        value={formData.cv}
        onChange={(e) => setFormData({  ...formData,cv: e.target.value })}
      />
    </label>
      <button className="submit" type="submit">Submit</button>
  </form>
    </div>
  );
}
