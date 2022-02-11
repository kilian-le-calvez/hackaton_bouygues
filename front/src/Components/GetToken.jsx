import React from 'react'
import Request from './Request'

function GetToken() {
    const [token, setToken] = React.useState("")
    const [bRes, setBRes] = React.useState("")

    let code = window.location.href
    try {
        code = code.split("code=")[1]
    } catch {
        code = "undefined"
    }
    console.log(code)
    Request.getToken(code).then((res) => {
        console.log(res.data["access_token"])
        setToken(res.data["access_token"])
    }).catch((err) => {
        console.log(err)
    })

    async function getConso() {
        Request.bouyguesGetConso(token).then((res) => {
            console.log(res)
            setBRes(JSON.stringify(res))
        }).catch((err) => {
            console.log(err)
            setBRes(JSON.stringify(err))
        })
    }
    return (
        <div>
            <h3>Access token</h3>
            <h1>{token}</h1>
            <button onClick={() => {
                window.location.href = "http://localhost:3000/"
            }}>HOME</button>
            <button onClick={() => {getConso()}}>BOUYGUE CONSO</button>
            <div>{bRes}</div>
        </div>
    )
}

export default GetToken