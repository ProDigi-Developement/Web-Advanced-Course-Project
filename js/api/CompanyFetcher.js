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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2OTExYjU1NjU5YTI5YmU3NTYyMDYzYmIxNzc2NWI1NDk4ZTgwZDYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvLWRpZ2ktYWR2YW5jZWQiLCJhdWQiOiJwcm8tZGlnaS1hZHZhbmNlZCIsImF1dGhfdGltZSI6MTUzMzA2MzgxNywidXNlcl9pZCI6IlBsaEd5Y0VnUzdZS1BYeHF5aE9NME9IVTR4MzIiLCJzdWIiOiJQbGhHeWNFZ1M3WUtQWHhxeWhPTTBPSFU0eDMyIiwiaWF0IjoxNTMzMDYzODE3LCJleHAiOjE1MzMwNjc0MTcsImVtYWlsIjoiY2Fpb0B0cmFpbmVycGwudXMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2Fpb0B0cmFpbmVycGwudXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.L-HA1FIQYgK4B8HD0IplI8a2Ltj_Bjj2-w6WN4Ee2GfZ5WMeC-1BuvOLMqXbAmizqhJjVga09H1WVj9CCrYrTeqsBKNM4nTLIr6Z-X04CqE6JdPFTrF3xYBthre5s3nMDxOXc7j3YYFsy81v7lkbVimqOgz-kn0JS1cPoTc0vT7C69NAepf-VCECE0D4xxg5jhZ63F5PFy4yZZ2z-Vm9rAhMFy7Krti3fWGH4uiPkl_S44IZrYlfNroluVbXVwRvPiy5OmXlL2R9ke4WBHCf_0SjB8_cKQiIyhOtXoOn_NWKUeGhRUxw-L6qgF3UVlA-bHnHDh_YIwLcrbGvYsH1nw';

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
