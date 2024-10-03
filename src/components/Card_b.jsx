import React from 'react'
import Card_b_a from './Card_b_a'

const Card_b = ({users , deleteli , addedit}) => {
  return (
  <div className="card my-3 p-1">
      <ul className="list-group.my-3">
{
    users.map((user) => (
        <Card_b_a key = {user.id} user = {user} deleteli={deleteli} addedit={addedit}/>
    ))
}

    </ul>
  </div>
  )
}

export default Card_b