/**
 * @class CompanyFetch - Fetchs company's data
 */
class CompanyFetcher {
    constructor() {
    // applies singleton pattern
        if (!CompanyFetcher.instance) {
            CompanyFetcher.instance = this;
        }

        this.url = 'https://pro-digi-advanced.firebaseio.com/company.json?auth='; 
        this.token =
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2OTExYjU1NjU5YTI5YmU3NTYyMDYzYmIxNzc2NWI1NDk4ZTgwZDYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvLWRpZ2ktYWR2YW5jZWQiLCJhdWQiOiJwcm8tZGlnaS1hZHZhbmNlZCIsImF1dGhfdGltZSI6MTUzMjg5MjQ3NSwidXNlcl9pZCI6IlBsaEd5Y0VnUzdZS1BYeHF5aE9NME9IVTR4MzIiLCJzdWIiOiJQbGhHeWNFZ1M3WUtQWHhxeWhPTTBPSFU0eDMyIiwiaWF0IjoxNTMyODkyNDc1LCJleHAiOjE1MzI4OTYwNzUsImVtYWlsIjoiY2Fpb0B0cmFpbmVycGwudXMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2Fpb0B0cmFpbmVycGwudXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.YU-iDlfsJViOnBst695CVKsxY43fsAn-JsVin1vJ31d9oFnlRL4ClgzqG0ihUmt3ZW2BoJC4vubVTVLFs0VYQqMZpcfpnUw6qIrHO-czXadF3PFtjtGHyA-6wvxZUkijr19Og3r0GtZ12Olz2RTnTNKxyzIwOz9OtBjLLq9GKdmpAk5rJV_O5Ry-btJNhyAKKhjgsJeCWO5r33L-2EoPpe_pcED65HVHeVoaakyx6OS0rNiU6TWza0S6wwY0KVxoeNxjZYz5dV8rvqA-tdLtn2HdiMtXNPdKSJxP19cOU6qVnwUCriQV9oiOf3lAPePo9ila9WvpHWQ8xrWwAdDBOg';

        return CompanyFetcher.instance;
    }

    /**
   * @returns All companies information
   */
    async all() {
        try {
            const fetching = await fetch(`${this.url}${this.token}`);
            const data = await fetching.json();
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }
}

// this is the instance of CompanyFetcher
const companyFetcher = new CompanyFetcher();
Object.freeze(companyFetcher);
