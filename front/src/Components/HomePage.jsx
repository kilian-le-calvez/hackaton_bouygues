import React from 'react'
import Request from './Request'

function HomePage() {

    function fetchIt() {
        Request.getGoogle().then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>HomePage
            <button onClick={() => {fetchIt()}}>GOOGLE</button>
        </div>
  )
}

export default HomePage