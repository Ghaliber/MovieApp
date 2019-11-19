import Spinner from './Spinner'
import React from 'react'
const Hoc = WrappedComponent => {
    
    return (props) => props.loading ?  <Spinner/> : <WrappedComponent {...props}/>
}
export default Hoc


