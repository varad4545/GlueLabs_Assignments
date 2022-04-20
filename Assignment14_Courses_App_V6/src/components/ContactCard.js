import React from 'react'
import user from '../images/user.png'
import {Link} from 'react-router-dom'
const ContactCard=(props)=>{
    const{name,email}=props.contact;
    return(
        <div className='item' >
            <img className='ui avatar image' src={user} alt="user"/>
        <div className='content'>
          
            <div className='header'>{name}</div>
            <div>{email}</div>
  
            <i className='trash alternate outline icon' style={{color:'red',marginTop:"7px" ,marginLeft:"1000px"}}
                onClick={()=>props.clickhandler(id)}
            >
                
            </i>

        </div>
     </div>
    )
}

export default ContactCard