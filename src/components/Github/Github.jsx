/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/akm0786')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data);
    //         setData(data)
    //     })

    // }, [])

    return (
        <>
        <div className="p-3"> Github Followers: {data.followers}</div>
        <div className="flex justify-center"><img src={data.avatar_url} alt="github pic" width={300}/></div>
        </>
    )

}


export default Github

export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/akm0786')
    return response.json()
}