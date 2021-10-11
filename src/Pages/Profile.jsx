import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";

export default function Profile(){

    const params = useParams();
    console.log(params);
    return(
        <>
            <h3>{params.username}</h3>
            <Link to='/users'>User</Link>
        </>
    )
}