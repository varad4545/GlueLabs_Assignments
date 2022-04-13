import React, { useState,useEffect } from 'react'
import axios from 'axios'
const PostFormHook= () =>{
    const [userId,setUserId]=useState('');
    const [title,setTitle]=useState('');
    const [body,setBody]=useState('');

    const handleChange = e => {
        if(e.target.name=='userId'){
             setUserId(e.target.value)
        }
        if(e.target.name=='title'){
            setTitle(e.target.value)
       }
       if(e.target.name=='body'){
        setBody(e.target.value)
   }
      
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const url = 'https://jsonplaceholder.typicode.com/posts'
        const state={userId:userId,
            title:title,
            body:body,
        
        }

        axios
        .post(url, state, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        })
        .then(({data}) => {
          console.log(data);
      });

        const res = await fetch(url)
        const data = await res.json()
        console.log(data)


    }



    return ( 
        <>
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="userId" value={userId} onChange={handleChange} />
        </div>
        <div>
            <input type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div>
            <input type="text" name="body" value={body} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
     );
}

export default PostFormHook;