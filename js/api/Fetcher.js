/**
 * @class CompanyFetch - Fetchs company's data
 */
class Fetcher {
    constructor() {
    // Reusing the instance of Fetcher class that is used by other controllers such as Company / Job / Stundet.

        if (!Fetcher.instance) {
            Fetcher.instance = this;
        }

        this.loginUrl = '';
        this.baseUrl = 'https://prodigi-api-advanced.herokuapp.com/api';

        return Fetcher.instance;
    }

    /**
   * @returns a JSON with all information
   */
    async fetch(url) {
        try {
            const fetching = await fetch(`${this.baseUrl}/${url}`);

            if (fetching.status !== 200) {
                throw new Error(fetching.statusText);
            }
            const data = await fetching.json();

            return data;
        } catch (err) {
            throw new Error(err);
        }
    }

    async post(url, data) {
        try {
            const posting = await fetch(`${this.baseUrl}/${url}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });

            const result = await posting.json();
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }

    async delete(url, objId) {
        try {
            const deleting = await fetch(`${this.baseUrl}/${url}/${objId}`, {
                method: 'DELETE'
            });

            const result = await deleting.json();
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }

    async login(data) {
        try {
            const loggin = await fetch(`${this.baseUrl}/users/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            });

            if (loggin.status !== 200) {
                throw new Error(loggin.statusText);
            }

            const result = await loggin.json();
            return result;
        } catch (err) {
            throw new Error(err);
        }
    }
}

// this is the instance of Fetcher
const fetcherObject = new Fetcher();
Object.freeze(Fetcher);
