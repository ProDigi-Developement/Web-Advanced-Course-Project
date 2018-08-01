/**
 * @class CompanyController - Model for Companies
 */
class CompanyController {
    /**
   * @constructor Constructor of CompanyController
   */
    constructor() {
        this.fetcher = Fetcher; 
        this.allCompanyEndpoint = 'https://pro-digi-advanced.firebaseio.com/company.json'; 
    }

    /**
   * List all companies
   * @returns {Array} Company
   */
    async all() {
        const data = await this.fetcher.fetch(this.allCompanyEndpoint);
        const objs = data.map(d => new Company(d));

        return objs;
    }

    // methods come here
}
