import React, { useEffect, useState } from 'react'
import {useLoaderData} from "react-router-dom"


function Github() {
       const data = useLoaderData()

    // const[data,setData]=useState([])
    
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/MANTVI")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })

    // },[])
    return (
        <>
        <div className='text-center m-4 bg-gray-700 text-white p-4 text-4xl'>
            GITHUB FOLLOWERS: {data.followers}
            <img src="data.avatar_ur" alt="VIMAL SINGH" />
        </div>
        </>
    )
}

export default Github

export const gitHubInfo= async()=>{
    const response=await fetch("https://api.github.com/users/MANTVI")
    return response.json()

}
