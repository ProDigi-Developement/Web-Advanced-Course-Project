//<---Java Script Code--->
const url = 'https://pro-digi-advanced.firebaseio.com/student.json?auth=';
const token='eyJhbGciOiJSUzI1NiIsImtpZCI6ImI4OWY3MzQ2YTA5ODVmNDIxZGNkOGQzMGMwYjMwZWViZmFlMTlhMWUifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJvLWRpZ2ktYWR2YW5jZWQiLCJhdWQiOiJwcm8tZGlnaS1hZHZhbmNlZCIsImF1dGhfdGltZSI6MTUzMjQ1NTk4MiwidXNlcl9pZCI6IlBsaEd5Y0VnUzdZS1BYeHF5aE9NME9IVTR4MzIiLCJzdWIiOiJQbGhHeWNFZ1M3WUtQWHhxeWhPTTBPSFU0eDMyIiwiaWF0IjoxNTMyNDU1OTgyLCJleHAiOjE1MzI0NTk1ODIsImVtYWlsIjoiY2Fpb0B0cmFpbmVycGwudXMiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY2Fpb0B0cmFpbmVycGwudXMiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.O_KJXR_r6Bj9ogdUwslCjBAkovcMXwuaodOkOrlfhnpu9TTwMK6e9AH-jRVTzctuY6EHDRpfhZvLYmcKnRetjDDoAngvqDB1ZXCXAHh4Qikt7Q3K5MNlNS6snoSNQDCSmdeT1aY8LXME6JNwH0fblawYBZGsIyuWIHU8v2T0GhSZXCHSwx9tvVldItR2E4jrkSHf2H3gbzOqDKI2s_OFWjevvkfClVgcP318xicvn4ftTrpF3utmnbGapRZiSAn9Uikh5QVGVusHA0L9fap_qubovRh9uEj7Hk-_SpYteRcOqyyLOZly23vUsEb3E2bObaHwWDb6Zs0C30wfaeKujA';
fetch(url+token)
  .then(response => {
    return response.json();
  }).then(data => {
      for(var i=0;i<data.length;i++){
        console.log("Email of "+data[i].name+":->"+data[i].email);
      }
  }).catch(err => {
    console.log(err);
  });
