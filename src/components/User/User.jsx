/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams()
    return (
        <div className="text-center text-3xl text-white bg-gray-600 p-4 m-3">User: {userid}</div>
    )
}

export default User