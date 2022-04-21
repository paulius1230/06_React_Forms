import React from "react";
import { useState } from "react"

  
export default function List2(props) {
  const [searchValue, setSearchValue] = useState("")
  return (  
    
    <div className="border">

      <h3>Mokinių sąrašas</h3>
      <ul className="list-group list-group-flush">
      <input
        type="text"
        name="search"
        value={searchValue}
        placeholder="Filtruoti pagal vardą"
        onChange={e => setSearchValue(e.target.value)}
      />
      </ul>

      <ul>
        {props.users
          .filter(user => user.name.match(new RegExp(searchValue, "i")))
          .map(user => {
            return <li className="list-group-item" key={user.id}>
            <span className="w-50 p-3">{user.name}</span>
            <span className="w-50 p-3">{user.surname}</span>
            <span className="w-50 p-3">{user.date}</span>
            <span className="w-50 p-3">{user.city}</span>
            <span className="w-50 p-3">{user.program}</span>
            <span className="w-50 p-3">{user.group}</span>

            <button
              className="btn btn-danger float-right mx-2"
              onClick={() => props.deleteUser(user.id)} 
                             
            >Pašalinti</button>

            <button
              className="btn btn-info float-right"
              onClick={() => props.editUser(user)}
            >Atnaujinti</button>
          </li>
          })}
      </ul>
    </div>
    
  );
}