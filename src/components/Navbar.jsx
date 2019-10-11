import React from 'react'

function Navbar({ totalCounters }) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                    </span> 
            </a>
        </nav>
    )
}

export default Navbar