import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => { 
    return (
        <div className="PageNotFound">
            <main className="fof-container">
                <div className="fof">
                    <h1>Error 404</h1>
                    <Link to="/"><p>Return Home</p></Link>
                </div>
            </main>
        </div>
    )
}

export default PageNotFound