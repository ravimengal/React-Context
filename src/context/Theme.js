import React ,{useContext} from 'react'
import {Mycontext} from '../App'

const Theme = () => {
     const mycon = useContext(Mycontext)
    return (
        <div>
            {mycon}
        </div>
    )
}

export default Theme
