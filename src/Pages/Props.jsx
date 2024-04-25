import { useState } from 'react'

function Button(props){
    return <button>{props.label}</button>;
}

function userProfile(props){
    return(
        <div>
            <h4>Name:{props.name}</h4>
            <p>age:{props.age}</p>
            <p>Email:{props.email||"not provided"}</p>
        </div>
    )
}

export default {Button,userProfile}

