"use client";
import { useEffect, useState } from "react";


export default function Cats(){
   const [cats, setCats] = useState([]);
   const [search, setSearch] = useState("");
   

  
   async function fetchCats() {
    let  url = "/Customer/api";
    const res = await fetch(url);
    const data = await res.json();
    setCats(data);
  }
  useEffect(() => {
    fetchCats();
  }, []);
  
  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    fetchCats();
  }
 

  return(
    
  <div> 
    <main className="h-screen">
    
     
    <h1 className="font-bold text-2xl">Cats</h1>
    <ul className="list-disc pl-5">
    <form onSubmit={handleSubmit}>
      Search by Cat Name:
    <input type="text" name="catname"
     className="border mr-2 bg-black text-white px-4 py-2 rounded-md"
     onChange={(e) => setSearch(e.target.value)}/>
     <button type="submit" className="bg-teal-500 px-4 py-2 rounded-md text-black">
     Submit
     </button>
     </form>


    {cats.map((s) =>(
        <li key={s.CatID}>
            Name: {s.CatName} Breed: {s.Breed}
        </li>
    ))}    
    </ul>
    </main>
    </div>);
}

    

 
