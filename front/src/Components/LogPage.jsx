import React from 'react'

const client_id = "partenaire.elba.bouyguestelecom.fr"
const url_callback = "http://localhost:3000/getToken"

const url = "https://oauth2.sandbox.bouyguestelecom.fr/ap4/authorize?" +
"client_id=" + client_id + "&response_type=code&" +
"redirect_uri=" + url_callback

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