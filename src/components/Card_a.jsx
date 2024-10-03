import React, {useEffect, useState } from 'react'

const Card_a = ({addli,edit, ubdateuser}) => {
  const [Name , setname] = useState("")
  const [Email , setemail] = useState("")
const handleaddli = (e) =>{
  e.preventDefault();
  if(edit.isEdit){
    ubdateuser({
      id : edit.user.id,
      Name,
      Email,
    });
  }else{
    addli(Name , Email)
  }
  setname("")
setemail("")
};

useEffect(() => {
  setname(edit.user.name);
setemail(edit.user.email);
},[edit]);
  return (
    <>
    <div  className="card p-3 shadow text-center" >

<form onSubmit={(e)=> handleaddli(e)} className="my-3">
<input onChange={(e)=>setname(e.target.value)} type="text" placeholder='Name' className="my-3 w-100" value={Name}/>

<input onChange={(e)=>setemail(e.target.value)} type="text" placeholder='Email'className="my-3 w-100" value={Email}/>

<button  className="btn btn-success w-100 my-3">Save</button>
</form>
</div>
    </>
  )
}

export default Card_a