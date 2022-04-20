import React from 'react'
import { withRouter } from 'react-router-dom'
const Header = () => {
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>
                <h2>Contact Manager</h2>
            </div>
        </div>
    )
}

export default withRouter(Header)