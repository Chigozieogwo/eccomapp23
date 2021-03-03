
import React from 'react'
import { Spinner } from 'react-bootstrap'




const LoaderSpinner = () => {
    return (
        <>
            <Spinner animation="grow" role='status' variant="info"
                style={{
                    width: '300px',
                    height: '300px',
                    margin: 'auto',
                    display:"block"
            }}
            >
                <span className= 'sr-only'> Loading...</span>
            </Spinner>      
        </>
    )
}

export default LoaderSpinner
