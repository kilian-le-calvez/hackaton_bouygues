import React from 'react'
import Cors from 'cors'

// const client_id = "GameOfTech12"
const client_id = "partenaire.elba.bouyguestelecom.fr"

const url_callback = "http://localhost:3000/getToken"

const url = "https://oauth2.sandbox.bouyguestelecom.fr/ap4/authorize?" +
"response_type=code&client_id=" + client_id + "&" +
"redirect_uri=" + url_callback

const fixedUrl = "https://oauth2.sandbox.bouyguestelecom.fr/ap4/authorize?client_id=GameOfTech12&response_type=code&redirect_uri=http://localhost:3000/getToken"

function LogPage() {
  
    function redirect() {
        window.location.href = url;
    }
    console.log(url)
    return (
        <div>
            <button onClick={() => {redirect()}}>Redirect</button>
        </div>
    )
}

export default LogPage