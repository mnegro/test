import { Link } from 'react-router-dom';
import './Header.scss';

export default function Header(){
    return(
        <div>
            <nav>
                <h3>Hola Mundo</h3>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/users'>User</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                </ul>
            </nav>
        </div>
    )
}
