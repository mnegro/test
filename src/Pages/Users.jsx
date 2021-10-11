import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Users(){

    const [user, setUser] = useState([])
    const users = fetch('https://api.github.com/users');
    useEffect(() => {
        users.then((res) => res.json())
            .then((data) => setUser(data))
    }, [])
    return(
        <>
        <h3>Users</h3>
        {!user.length && <p>No hay datos</p> }

        {
            (user.map((item)=>{
               return <li>
                        <Link to={`/profile/${item.login}`}>{item.login}</Link>
                      </li>
            }))
        }


        <Link to='/profile'>Profile</Link>
        </>
    )
}