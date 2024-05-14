import React, { useState } from 'react'
import useFetch from './Hooks/useFetch'
import Cards from './Component/Cards';
import search from './Component/search';

export default function App() {
    const [query,setQuery]=useState("flower");
    const {data,error,loading}=useFetch(`https://pixabay.com/api/?key=43187410-99355199dfdb4c8646d1356b2&q=${query}&image_type=photo&pretty=true`);

    

    let imageSrc = [];
    
    if (data && data.hits && Array.isArray(data.hits) && data.hits.length > 0) {
        imageSrc = data.hits.map((img)=>{ return img});
    }

    const searchQuery=(e)=>{
        setQuery(e.target.value);
    }

    const keyDwon=(e)=>{
        if(e.key==='Enter'){
             searchQuery(e);
        }
    }
    return (
        <div className='app'  >
            <input className='search' onChange={(e)=>{searchQuery(e)}} onKeyDown={keyDwon} placeholder='Search the name🔎'/>
            <div className='container'>
            
                {
                 imageSrc.map((val,index)=><Cards key={index} data={val} />)
                }
            </div>
        </div>
    );
  
}
