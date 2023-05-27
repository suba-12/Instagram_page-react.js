import React from 'react'
import { Link } from 'react-router-dom';
const Linkage = () => {
  return (
    <div>
        <nav className="item">
            <ul>
                <Link to ='/home'>Home</Link>
            </ul>

        </nav>
    </div>
  )
}

export default Linkage