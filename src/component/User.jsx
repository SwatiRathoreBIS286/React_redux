import React from "react";

const User = (props)=>{
    console.warn(props)
    console.warn(props.data.name)
    const {data} = props
    return(
        <>
        <h1>User Component</h1>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        </>
    )
};

export default User;