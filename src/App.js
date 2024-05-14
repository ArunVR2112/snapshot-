import React, { useState } from 'react'
import useFetch from './Hooks/useFetch'
import Cards from './Component/Cards';
// import search from './Component/search';

export default function App() {
    const [query, setQuery] = useState("flower");
    const { data } = useFetch(`https://pixabay.com/api/?key=43187410-99355199dfdb4c8646d1356b2&q=${query}&image_type=photo&pretty=true`);


    let imageSrc = [];

    if (data && data.hits && Array.isArray(data.hits) && data.hits.length > 0) {
        imageSrc = data.hits.map((img) => { return img });
    }

    const searchQuery = (e) => {
        setQuery(e.target.value);
    }

    const keyDwon = (e) => {
        if (e.key === 'Enter') {
            searchQuery(e);
        }
    }
    console.log(data);

    return (
        <div className='w-full bg-gradient-to-b pt-5 from-black to-gray-700 h-fit'  >
            <h1 className='text-2xl pb-4 text-white '>SnapShot📲</h1>
            <input className='w-1/3 border-none rounded text-gray-500 bg-blend-darken bg-gray-800 h-10 dark:text-gray-400' onChange={(e) => { searchQuery(e) }} onKeyDown={keyDwon} placeholder='Search the name🔎' />
            <div className='md:grid-cols-4 sm:grid-cols-3 grid pb-12  grid-cols-2 w-full mt-10 sm:pb-10 '>
                {
                    imageSrc.map((val, index) => <Cards key={index} data={val} />)
                 }
            </div>
        </div>
    );

}
