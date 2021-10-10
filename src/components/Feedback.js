import React,{useContext} from 'react'
import Appcontext from '../context/app-context'

const Feedback = () => {
    const {message,auth} = useContext(Appcontext)
   
    return (
        <div style={{backgroundColor: auth ? 'green' : 'red'}}> 
            <h1>Hello from Feedback</h1>
            {message}
        </div>
    )
}

export default Feedback
