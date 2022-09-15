import React from 'react'

export const Card = (props) => {
    return (
        <React.Fragment>
        
            <div className="friends">
                <h2> {props.fullname}</h2>
                <p> {props.phonenumber}</p>
            </div>
        
        </React.Fragment>
    )
}