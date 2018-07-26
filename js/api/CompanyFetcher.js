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
      'eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4OWY3MzQ2YTA5ODVmNDIxZGNkOGQzMGMwYjMwZWViZmFlMTlhMWUifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvLWRpZ2ktYWR2YW5jZWQiLCJhdWQiOiJwcm8tZGlnaS1hZHZhbmNlZCIsImF1dGhfdGltZSI6MTUzMjU3ODA2OCwidXNlcl9pZCI6IlBsaEd5Y0VnUzdZS1BYeHF5aE9NME9IVTR4MzIiLCJzdWIiOiJQbGhHeWNFZ1M3WUtQWHhxeWhPTTBPSFU0eDMyIiwiaWF0IjoxNTMyNTc4MDY4LCJleHAiOjE1MzI1ODE2NjgsImVtYWlsIjoiY2Fpb0B0cmFpbmVycGwudXMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2Fpb0B0cmFpbmVycGwudXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Os-kbcN5tcYvmyj8jnMD6qtfUDFVwvGM1U24X08bTmqEBSpyoPkg6oic1gwmebjrt2xG8JrGvzT1OSBnVjj8KKKDG9p_H940KwRRodV9ZJA8vdXFtaFfXSQF1DoaS0CDASsiiQs1juNV6-ZGagWbUd-L6AHTZlDie8TCpylf6S9RmbGF5VowtJG8hgXiFb-eiZlqCEXNh8jgw8eaXrjhvc3v_56snN8HWnOD9bKkgfi48QK3AY_PK_lEZb1asTSr1gJbb1JRJftgD2v2Loe3bgF2QLOWuzkCwkp9g0ZFr6uSbuQJ_1gvgflv8VeLSBxaPZJkYzfl0YYgC2hEPojc6A';

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
