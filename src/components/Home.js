import React,{useContext} from 'react'

import Appcontext from '../context/app-context';

const Home = () => {

    const {message,auth,setAuth} = useContext(Appcontext)

    return (
        <div style={{backgroundColor: auth ? 'red':'green' }}>
            <h1>Hello from Home</h1>
            {auth ?  <button onClick={()=> setAuth(false)}>Login</button>:<button onClick={()=>setAuth(true)}>Logout</button>}
           
           <br/>
           <br/> {message}
           <br/>
           <br/>
           
           
           
        </div>
    )
}

export default Home
