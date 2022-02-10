const tokenUrl = "https://oauth2.bouyguestelecom.fr/token?grant_type=authorization_code&code="

const basicToken = "partenaire.elba.bouyguestelecom.fr:nk6XFsmDJS6dmePr"
const basicToken64 = "cGFydGVuYWlyZS5lbGJhLmJvdXlndWVzdGVsZWNvbS5mcjpuazZYRnNtREpTNmRtZVByCg=="
const redirectUri = "http://localhost:3000/getToken"

class Request {
    async getToken(code) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + basicToken64);
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("redirect_uri", redirectUri);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch(tokenUrl + code, requestOptions).then((res) => {
            return res
        }).catch((err) => {
            throw(err)
        });
    }
}

export default new Request()