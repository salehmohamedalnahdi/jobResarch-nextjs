"use client"
import { RiDeleteBinLine } from 'react-icons/ri';
import { useRouter } from "next/navigation";

export default function ButtonDelete({id}) {
 
    const router = useRouter();
    const handleSubmit= async(e) => {;
        e.preventDefault();
        const clickconfirm=confirm("Are You Sure To Delete This blog ")
        if(!clickconfirm){
            return router.replace('/')
          }
        const response= await fetch('https://jopsearch-backend.onrender.com/delete/'+id, {
            method: 'DELETE',
          });
        const result= await response.json();
        console.log(result);
        window.location.reload()
      };
   
  return (
    <div className="delete">
        <button className="delete-button" onClick={handleSubmit}>
           <RiDeleteBinLine  />
        </button>
    </div>

  );
}
