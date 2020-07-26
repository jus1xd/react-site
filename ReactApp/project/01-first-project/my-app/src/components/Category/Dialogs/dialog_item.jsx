import React from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import avatar from '../../../avatar.jpg'


const Dialog_item = (props) => {
    return(
        <NavLink to='/dialogs/1'>
            <div className="dialog__item">
                <NavLink to='/profile/3434'>
                    <img className="author__avatar" src={avatar} />
                </NavLink>
                    <div className="author__name">{props.name}</div>
            </div>
        </NavLink>
    )
}


export default Dialog_item;