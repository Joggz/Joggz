import React from 'react'

import './workLayout.scss'
 const Layout = ({id, workplace, position, duration, role}) => (
        <div className='layout'>

            <h3 className="workplace">{workplace}</h3>

            <h5 className='pos'>{position}</h5>
              <p className="duration">
                {duration}
              </p>
            <h5 className="role">
              {role}
            </h5>
        </div>
    )


export default Layout;