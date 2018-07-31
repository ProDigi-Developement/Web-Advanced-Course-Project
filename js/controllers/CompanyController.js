/**
 * @class CompanyController - Model for Companies
 */
class CompanyController {
    /**
   * @constructor Constructor of CompanyController
   */
    constructor() {
        this.fetcher = companyFetcher;
    }

    /**
   * List all companies
   * @returns {Array} Company
   */
    async all() {
        const data = await this.fetcher.all();
        const objs = data.map(d => new Company(d));
        return objs;
    }

    async getCompanyByJob(jobId){
        const data = await this.fetcher.allJobs();
        const filtered = data.find(j => j.jobId == jobId);
        if(filtered == null){
            return null;
        }
        const companyList = await this.all();
        const companyObj = companyList.find(c => c.props.companyId == filtered.companyId );
        if(companyObj == null){
            return null;
        }
        return companyObj;
    }

    // methods come here
}
