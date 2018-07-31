/**
 * @class CompanyFetch - Fetchs company's data
 */
class CompanyFetcher {
    constructor() {
    // applies singleton pattern
        if (!CompanyFetcher.instance) {
            CompanyFetcher.instance = this;
        }
    //     this.url = 'https://pro-digi-advanced.firebaseio.com/'+this.model+'.json?auth=';
        this.token =
        'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2OTExYjU1NjU5YTI5YmU3NTYyMDYzYmIxNzc2NWI1NDk4ZTgwZDYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvLWRpZ2ktYWR2YW5jZWQiLCJhdWQiOiJwcm8tZGlnaS1hZHZhbmNlZCIsImF1dGhfdGltZSI6MTUzMzA2NzYyNiwidXNlcl9pZCI6IlBsaEd5Y0VnUzdZS1BYeHF5aE9NME9IVTR4MzIiLCJzdWIiOiJQbGhHeWNFZ1M3WUtQWHhxeWhPTTBPSFU0eDMyIiwiaWF0IjoxNTMzMDY3NjI2LCJleHAiOjE1MzMwNzEyMjYsImVtYWlsIjoiY2Fpb0B0cmFpbmVycGwudXMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2Fpb0B0cmFpbmVycGwudXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.LrnzpaM6Yiv-p6IbTjUnJ7G-mf3oh7A4vCvJa1jqm-rmMjwlDUg8MQSyfF45GAvqYVTfGT6mz7oo_atuEGUqtDSYwOawM7n7Lyrx-yb_ROZx--Gbq6Ns7Kp9W-hq7h0-oeSACSM-qHcx6KWhVGusYY3HhvfMjUSlAbv-khPqAWbAVmLEXeN-UdCEZ6foa6R5hlEyS27_GkOPOfODDR5TGiFF6h0eUZoFognLKN7jAzEK4M6oTtdjnTZ5qVMQLB8vnXTDIsQBe_y1LLMI9SlzG4T6UNRsae3OxQePDYWxu2ymO9ArMktA_tXF3L_vEXGyOCR6l5K4lU_3Cdm4NvFKxw';

        return CompanyFetcher.instance;
    }

    /**
   * @returns All companies information
   */
    async all() {
        let url = this.generateURL('company');
        try {
            const fetching = await fetch(`${url}${this.token}`);
            const data = await fetching.json();
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }
    async allJobs() {
        let url = this.generateURL('job');
        try {
            const fetching = await fetch(`${url}${this.token}`);
            const data = await fetching.json();
            return data;
        } catch (err) {
            throw new Error(err);
        }
    }
    generateURL(model){
        let url = 'https://pro-digi-advanced.firebaseio.com/'+model+'.json?auth=';
        return url;
    }
}

// this is the instance of CompanyFetcher
const companyFetcher = new CompanyFetcher();
Object.freeze(companyFetcher);

