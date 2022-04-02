import React, { useState } from 'react'
import './Image.css'

export default function Image() {
    let arr =[
        'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
    ]
    
    let [count,setc] = useState(0);
    let [url,setUrl] = useState(arr[0]);
    let[st,setSt]=useState(
        {
            backgroundImage : "url('"+url+"')",
            backgroundPosition : 'center',
            backgroundSize : 'cover',
            backgroundRepeat : 'no-repeat'
        }
    )
    
    const change = ()=>{
        setc(++count);
        setUrl(arr[count%2]);
        setSt(
            {
                backgroundImage : "url('"+url+"')",
                backgroundPosition : 'center top',
                backgroundSize : 'cover',
                backgroundRepeat : 'no-repeat'
            }
        )
    }
          

 
    
  return (
    <div className='change' style={st}>
      <button className='prev' onClick={change}>Prev</button>
      <button className='next' onClick={change}>Next</button>
    </div>
  )
}
