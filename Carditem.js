import React from 'react'
import {Link} from "react-router-dom"

const Carditem = () => {
  return (
   <>
    <li className="carditem">
        <Link className='carditem-link'>
            <figure className='carditem-wrap'>
                <img src="/" alt="" className='carditem-img'/>
            </figure>
            <div className='carditem-info'>
                <h5 className='carditem-text'></h5>
            </div>
        </Link>
    </li>
   </>
  )
}

export default Carditem