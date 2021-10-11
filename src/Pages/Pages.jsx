import { Route } from "react-router"
import Home from "./Home/Home"
import Profile from "./Profile"
import Users from "./Users"



export default function Pages(){
    return(
        <main>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users}></Route>
            <Route path="/profile/:username" component={Profile} />
        </main>
    )
}