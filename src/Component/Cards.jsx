import React, { useState } from 'react'
// import './index.css'

export default function Cards(props) {
  const [download,setDownload]=useState("");
  const downloadBtn = () => {
    setDownload(props.data.previewURL);
  }
  return (
    <div className='card'>

      <img className='img' src={props.data.webformatURL} alt='' />
      <h2 className='heading'>{props.data.user}</h2>
      <button className='btn'> <a className='a' href={download} download onClick={downloadBtn}>Download</a> </button>
    </div>
  )
}
