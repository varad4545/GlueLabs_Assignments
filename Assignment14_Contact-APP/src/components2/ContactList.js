import React from 'react'
import { useHistory } from 'react-router-dom';
import ContactCard from './ContactCard';
import {Link,withRouter} from 'react-router-dom'

const ContactList = (props) => {
    const deleteContact=id=>props.getContactId(id);
    let history=useHistory();

    return (
        
   <div className='main'>
          <h2>Contact List</h2>
          <Link to="/add">
              <button className='ui violet button'>AddContact</button>
          </Link>
         <div className='ui celled list'>
         {props.contacts.map(contact=><ContactCard key={contact.id} contact={contact}
           clickHandler={deleteContact}
         />)}
        </div>
   </div>
    )
}

export default withRouter(ContactList)