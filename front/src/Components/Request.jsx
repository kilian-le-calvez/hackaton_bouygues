import axios from 'axios'

const tokenUrl = "https://oauth2.sandbox.bouyguestelecom.fr/ap4/token?grant_type=authorization_code&code="
const consoUrl = "https://api.sandbox.bouyguestelecom.fr/ap4/customer-management/v1/usage-consumptions/mobile-data"

const basicToken = "GameOfTech12"
const basicToken64 = "R2FtZU9mVGVjaDEyOm5rODVUZ3k2a1ZndGZlUjI="
const redirectUri = "http://localhost:3000/getToken"

const apiUrl = "http://127.0.0.1:8000"

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

    async bouyguesGetConso(accessToken) {
        var config = {
            headers: {
                "Authorization": "Bearer " + accessToken,
            }
        };
        return axios.get(consoUrl, {
            "headers": {"Authorization": "Bearer " + accessToken}
        }).then((res) => {
            return res
        }).catch((err) => {
            throw(err)
        })
    }

    async getImage() {
        return axios.get(apiUrl + "/api/images/").then((res) => {
            return res.data
        }).catch((err) => {
            throw(err)
        })
    }

    async changeParams(minMos, maxMos) {
        const data = {
            "min": minMos,
            "max": maxMos
        }
        return axios.post(apiUrl + "/api/paramsView/", data).then((res) => {
            return res.data
        }).catch((err) => {
            throw(err)
        })
    }
}

export default new Request()