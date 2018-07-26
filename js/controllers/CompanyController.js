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

    // methods come here
}
