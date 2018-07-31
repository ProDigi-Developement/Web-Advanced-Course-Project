/**
 * @class CompanyFetch - Fetchs company's data
 */
class Fetcher {
    constructor() {
        // Reusing the instance of Fetcher class that is used by other controllers such as Company / Job / Stundet.

        if (!Fetcher.instance) {
            Fetcher.instance = this;
        }

        this.token =
      'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2OTExYjU1NjU5YTI5YmU3NTYyMDYzYmIxNzc2NWI1NDk4ZTgwZDYifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvLWRpZ2ktYWR2YW5jZWQiLCJhdWQiOiJwcm8tZGlnaS1hZHZhbmNlZCIsImF1dGhfdGltZSI6MTUzMzA2NzQ0NCwidXNlcl9pZCI6IlBsaEd5Y0VnUzdZS1BYeHF5aE9NME9IVTR4MzIiLCJzdWIiOiJQbGhHeWNFZ1M3WUtQWHhxeWhPTTBPSFU0eDMyIiwiaWF0IjoxNTMzMDY3NDQ1LCJleHAiOjE1MzMwNzEwNDUsImVtYWlsIjoiY2Fpb0B0cmFpbmVycGwudXMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2Fpb0B0cmFpbmVycGwudXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.g6kG1WkTsB8TPGrMIkZTuPNmHmNm4Y94qWBVLW7oOcE7SIDGXQCg566s3A7tBQChyChwQ_4N7CnlyA3TN7656UBx8LeUxPjkEq6bECrMYh1_BFRUm5WkETbL6NkNIkSZQ4LLcuweZTtateecTg-eLQM4dcS2SKEu4f5y74dmn6PoMlUIMnRC5V-sdXNx58T6GZYfSxaz0fKn4BIzljh3ejDLe6NO7bdFjpcN6p440rW-5SWsVMPJwDCelcnUOEr4-4uLN06hfS91SFjZ_Gwn05pohpj53NY77En4qzKEczg5P9SIo5qUaBchAOC5qVVHdmA6bZC3Gsle3V8G9J1zUQ';
        this.loginUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB8m7LmEtH4wNjFKEfKnaUcUUJVdp1Ntx4';

        return Fetcher.instance;
    }

    /**
   * @returns All companies information
   */
    async fetch(url) {
        try {
            const fetching = await fetch(`${url}?auth=${this.token}`);
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
