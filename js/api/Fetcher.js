/**
 * @class CompanyFetch - Fetchs company's data
 */
class Fetcher {
    constructor() {
        // Reusing the instance of Fetcher class that is used by other controllers such as Company / Job / Stundet.

        if (!Fetcher.instance) {
            Fetcher.instance = this;
        }

        this.loginUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB8m7LmEtH4wNjFKEfKnaUcUUJVdp1Ntx4';

        return Fetcher.instance;
    }

    /**
   * @returns All companies information
   */
    async fetch(url) {
        try {
            const newToken = await this.login();

            const fetching = await fetch(`${url}?auth=${newToken}`);
            const data = await fetching.json();

            return data;
        } catch (err) {
            throw new Error(err);
        }
    }

    async login() {
        try {
            let body = {
                "email": "caio@trainerpl.us",
                "password": "121088",
                "returnSecureToken": true
            };

            const fetching = await fetch(`${this.loginUrl}`, {'method': "POST", 'body': body, 'headers': {'Content-Type': 'application/json'} });
            const data = await fetching.json();

            return data.idToken;
        } catch (err) {
            throw new Error(err);
        }
    }
}

// this is the instance of Fetcher
const Fetcher = new Fetcher();
Object.freeze(Fetcher);
