import axios from 'axios'

const tokenUrl = "https://oauth2.sandbox.bouyguestelecom.fr/ap4/token?grant_type=authorization_code&code="

const basicToken = "GameOfTech12"
const basicToken64 = "R2FtZU9mVGVjaDEyOm5rODVUZ3k2a1ZndGZlUjI="
const redirectUri = "http://localhost:3000/getToken"

class Request {
    async getToken(code) {
        // var myHeaders = new Headers();
        // myHeaders.append("Authorization", "Basic " + basicToken64);
        // myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("redirect_uri", redirectUri);

        var requestOptions = {
            method: 'POST',
            headers: {
                "Authorization": "Basic " + basicToken64,
                "Content-Type": "application/x-www-form-urlencoded"
            }
        };

        return axios.post(tokenUrl + code, urlencoded, requestOptions).then((res) => {
            return res
        }).catch((err) => {
            throw(err)
        });
    }

    async getGoogle() {
        return fetch("https://mc3.site", {
            method: 'GET'}).then((res) => {return res}).catch((err) => {throw(err)})
    }
}

export default new Request()