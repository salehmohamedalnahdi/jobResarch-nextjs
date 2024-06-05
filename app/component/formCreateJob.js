"use client"
//import "../style/globals.css";
import {useState} from "react"
import { useRouter } from "next/navigation";


export default function FormCreateJob() {
 
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        city: '',
        cat: '',
      });
      
    const router = useRouter();
    const handleSubmit = async(e) => {;
        e.preventDefault();
        if(!formData.title || !formData.content || !formData.city || !formData.cat){
          return alert("Plese All Fields Are Requiered ")
        }
        const response= await fetch('https://jopsearch-backend.onrender.com/create', {
          method: 'POST',
          body: JSON.stringify({
            title:formData.title,
            content: formData.content,
            city:formData.city,
            cat:formData.cat,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      const result= await response.json();
      console.log(result);
      router.push('/')
      };
   
  return (
    <div>
    <form onSubmit={handleSubmit} className="form">
    <label>
      Title:
      <input className="input-title"
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({  ...formData,title: e.target.value })}
      />
    </label>
    <label>
      City:
      <input className="input-city"
        type="text"
        value={formData.city}
        onChange={(e) => setFormData({  ...formData,city: e.target.value })}
      />
    </label>
    <label>
      Categoery:
      <input className="input-cat"
        type="text"
        value={formData.cat}
        onChange={(e) => setFormData({  ...formData,cat: e.target.value })}
      />
    </label>
    <label>
      Content:
      <textarea className="textarea"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData,content: e.target.value })}
      />
    </label>
      <button className="submit" type="submit">Submit</button>
  </form>
    </div>
  );
}
