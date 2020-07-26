import React from 'react'
import { NavLink } from 'react-router-dom'
import Dialog_item from './dialog_item'
import Dialog_message from './dialog_messages'

const Dialogs = () => {
    return(
        <div className="dialogs">
            <div className="dialog__items">
                <Dialog_item name="Dmitry"/>
                <Dialog_item name="Dmitry"/>
                <Dialog_item name="Dmitry"/>
            </div>
            <div  className="dialog__messages">
                <Dialog_message text="Lorem  ipsum"/>  
                <Dialog_message text="lkkghfnidnhidojnhdoighndoiuhndihgndighnidhnighndhnihindghndinohindgnijhdijnhindjghijndnjhindjghnjdinjhinjgidnjhnijdhinjdginjhdigjnhjggjnhinjhinojdhinjodinjhodoinjhgdoinjh"/>  
                <div className="input__area">
                    <textarea className="input__message" placeholder='Write a message..'></textarea>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;