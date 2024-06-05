"use client"
import { useState,useEffect } from "react";
import ButtonDelete from "./buttonDelete";
import FormApply from './formApply'
import SearchInput from './searchInput'


export default function Fetch (){
  let cat
  const [data,setData]=useState()
  const [load,setLoad]=useState(false)
  const [applyForm,setApplyForm]=useState(false)
  useEffect(()=>{
    fetchData()
  },[])
  const handleToggleForm = () => {
    setApplyForm(!applyForm);
  };
  const handleSearch = async (cat) => {
    fetchData(cat)
  }
  const fetchData = async (cat='') => {
    setLoad(true)
    const response= await fetch('https://jopsearch-backend.onrender.com/jobs/'+cat, {
      next: {revalidate: 60}
  });
  if(!response.ok){
    throw Error("could not fetch data for that resource")
       }
  const result= await response.json();
  setLoad(false)
  setData(result)
  }
    return (
    <div className="main">
      
      
      <div className="content">
      <SearchInput onSearch={handleSearch} />
      {load && <h2 className="load">Loading....</h2>}
        {data && data.map((item,index)=>{
          return (
             <div key={index} className="job">
                  <div className="row-job">
                     <h4 className="title">{item.title}</h4>
                     < ButtonDelete id={item.id} />
                  </div>
                   <p className="city">City: {item.city}</p>
                   <p className="cat">Categoery: {item.cat}</p>
                   <article className="desc">{item.content}</article>                     
                   <div className="apply">
                      <div className="button-form">
                         <button className="button-apply" onClick={handleToggleForm}>
                           {!applyForm ? <p>Apply</p>: <p>Cancel</p> }
                         </button> 
                         {applyForm && <FormApply id={item.id} />}
                      </div>
                   </div>            
              </div>
           )}
         )}
      </div>
    </div>
  )}
