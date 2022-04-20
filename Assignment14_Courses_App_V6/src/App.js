import './App.css';
// import Header from'./components/Header';
// import AddContact from'./components/AddContact';
// import ContactList from'./components/ContactList';
import Header from'./components2/Header';
import AddContact from'./components2/AddContact';
import ContactList from'./components2/ContactList';
import ContactDetail from'./components2/ContactDetail';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Route,Link,withRouter} from 'react-router-dom'
import { Switch } from 'react-router-dom';
// function App(){
//   const LOCAL_STORAGE_KEY='contacts';
//   const [contacts, setContacts] = useState(() => {
//     const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
//     return localData ? JSON.parse(localData) : [];
//   });

  
//  const addContactHandler=contact=>{
//      setContacts([...contacts,{id:contacts.length,...contact}]);
//  }
//  useEffect(() => {
//   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//   if (retriveContacts) setContacts(retriveContacts);
// }, []);

// useEffect(() => {
//   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
// }, [contacts]);

// const removeContact = id => {
//   const newContactList = contacts.filter(contact => contact.id !== id);
//   setContacts(newContactList);
// }
//   return (
//     <div className="ui container">
//     <Header/>
//     <AddContact addContactHandler={addContactHandler}/>
//     <ContactList contacts={contacts} getContactId={removeContact}/>
//     </div>
//   );
// }



function App(){
  const LOCAL_STORAGE_KEY='contacts';
  const [contacts, setContacts] = useState(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  });
 const addContactHandler=contact=>{
     setContacts([...contacts,{id:contacts.length,...contact}]);
 }
 useEffect(() => {
  const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (retriveContacts) setContacts(retriveContacts);
}, []);

useEffect(() => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
}, [contacts]);

const removeContact=id=>{
  const newContactList=contacts.filter(contact=>contact.id!==id);
  setContacts(newContactList);
}
  return (

    <div className="ui container">
      <Router>
        
         <Header/>

         <Switch>
            <Route path="/" exact component={()=><ContactList contacts={contacts} getContactId={removeContact}/>}/>
            <Route path="/add"  render={props=><AddContact {...props} addContactHandler={addContactHandler}/>}/>
            <Route path="/contact/:id"  component={ContactDetail}/>
         </Switch>


    </Router>

    </div>

  );
}

export default App;

