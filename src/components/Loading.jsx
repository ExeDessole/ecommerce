import React from 'react'
import {Spinner} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Loading() {
  return (
    <center>  
      <Spinner color='primary' style={{width: '15rem'},{height: '15rem'}}/>    
    </center>
  )
}

export default Loading