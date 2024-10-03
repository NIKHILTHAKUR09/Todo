import React from 'react'

const 
Card_b_a = ({user , deleteli , addedit}) => {
  return (
   <>
   <div className="list-group-item my-3 p-1">
   <h1 className="my-2">Name :{user.name}</h1>
 <p className="my-2">Email : {user.email} </p>
 <button onClick={()=> deleteli(user.id)} className="btn btn-danger float-end btn-sm">delete</button>
 <button onClick={()=> addedit(user)} className="btn btn-success float-end btn-sm">Edit</button>
   </div>
   
   </>
  )
}

export default Card_b_a