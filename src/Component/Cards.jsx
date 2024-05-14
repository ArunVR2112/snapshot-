import React, { useState } from 'react'


export default function Cards(props) {
  const [download, setDownload] = useState("");
  const downloadBtn = () => {
    setDownload(props.data.largeImageURL);
  }
  return (
    <div className=' w-full text-white mt-14 '>


      <img className='w-3/4 h-2/3 ' src={props.data.largeImageURL} alt='' />
      <h2 className='heading text-xl text-white pb-4'>{props.data.tags}</h2>
      <button className='px-6  rounded-sm  py-3 bg-cyan-700 hover:bg-red-400 hover:scale-105 '> <a className='px-6  rounded-sm  py-3 bg-cyan-70' href={download} download onClick={downloadBtn}>Download</a> </button>
    </div>
  )
}
