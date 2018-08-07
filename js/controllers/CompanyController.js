/**
 * @class CompanyController - Model for Companies
 */
class CompanyController {
    /**
   * @constructor Constructor of CompanyController
   */
    constructor() {
        this.fetcher = fetcherObject;
    }

    /**
   * List all companies
   * @returns {Array} Company
   */
    async all() {
        const data = await this.fetcher.fetch('companies');
        const objs = data.map(d => new Company(d));

        return objs;
    }

    async create(company) {
        delete company.props.id;

        const data = company.props;
        const r = await this.fetcher.post('companies', data);
        return r;
    }

    // methods come here
}
