import React from 'react'
import { useHistory, BrowserRouter } from 'react-router-dom'

import { FallbackWrapper } from './ErrorFallBackStyles'

function ErrorFallback({resetErrorBoundary}) {
    const history = useHistory()

    return (
        <>
  
                <FallbackWrapper>
                    <h1>Something went wrong 🤦‍♂️</h1>
                    <p 
                        onClick={() =>{
                            resetErrorBoundary()
                            history.push("profile")
                        }}
                    >
                        Go back to homepage.
                    </p>
                </FallbackWrapper>

        </>
    )
}

export default ErrorFallback
