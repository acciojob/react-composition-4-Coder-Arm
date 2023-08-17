
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [pass , setPass] = useState("");
  const [user,setUser] = useState("");
   console.log(user);
  
  function updateUser(e){
    e.preventDefault();
    setUser({'name' : name , 'email' : email , 'password' : pass})
    setName("")
    setEmail("")
    setPass("")
  }

  return (
    <div>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name <input type="text" value={name} id="name" onChange={(e) => setName(e.target.value)}/></label>
        <label htmlFor="email">Email <input type="text" value={email}  id="email" onChange={(e) => setEmail(e.target.value)}/></label>
        <label htmlFor="pass">Password <input type="text" value={pass}  id="pass" onChange={(e) => setPass(e.target.value)}/></label>
        <button>onSubmit</button>
      </form>
    </div>
  )
}

export default App
