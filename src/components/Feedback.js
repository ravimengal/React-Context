import React,{useContext} from 'react'
import Appcontext from '../context/app-context'

const Feedback = () => {
    const {message} = useContext(Appcontext)
   
    return (
        <div>
            <h1>Hello from Feedback</h1>
            {message}
            
        </div>
    )
}

export default Feedback
