import React from 'react'
import Request from './Request'

function GetToken() {
    let code = window.location.href
    try {
        code = code.split("code=")[1]
    } catch {
        code = "undefined"
    }
    console.log(code)
    Request.getToken(code).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
    return (
        <div>GetToken</div>
    )
}

export default GetToken