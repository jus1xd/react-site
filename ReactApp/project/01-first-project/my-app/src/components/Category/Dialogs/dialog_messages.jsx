import React from 'react'
import avatar from '../../../avatar.jpg'

const Dialog__message = (props) => {
    return(
    
            <div className="dialog__message">
                <img className="author__avatar" src={avatar} />
                {/* <p className="author__name">Dmitry</p> */}
                <div className="dialog__text">{ props.text }</div>
            </div>
       

    )
}

export default Dialog__message;