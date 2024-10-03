import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card_a from './components/Card_a'
import Card_b from './components/Card_b'

function App() {
  const [count, setCount] = useState(0)

const [user , setuser] =  useState([
  {
    id : 1,
    name : "John Wick",
    email : "john@gmail.com"
  },
  {
    id : 2,
    name : "Tuler Rake",
    email : "tuler@gmail.com"
  },
  {
    id : 3,
    name : "Deadpool",
    email : "deadpool@gmail.com"
  },
  {
    id : 4,
    name : "Wolverine",
    email : "Wolverine@gmail.com"
  },
])

const [edit , setedit] = useState({
    user : {},
    isEdit :false
})
// remove  

const deleteli = (id) => {
setuser(user.filter(user=>user.id!==id))
}

// add  

const addli = (name , email) =>{
setuser([{ id: crypto.randomUUID() , name , email},...user]);
}

// edit  


const addedit = (olduser) =>{
setedit({
  user :olduser,
  isEdit : true,
})
}

const ubdateuser = (ubdateuser) =>{
  setuser(user.map(user => {
if(user.id == ubdateuser.id){
  return ubdateuser;
}else{
  return user;
}
  }

  ))
 setedit({
  user:{},
  isEdit:false,
 })

}


const editUser = (user) => {
  setEdit(
    {
      user : user,
      isEdit : true
    }
  )
}
  return (
    <>
   <Navbar/>
   <div className="container ">
<Card_a  addli={addli} edit={edit} ubdateuser={ubdateuser}/>
<Card_b users={user} deleteli={deleteli} addedit={addedit}  />
   </div>
    </>
  )
}

export default App
