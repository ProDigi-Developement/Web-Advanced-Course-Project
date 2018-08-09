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
    async all(filter = '') {
        const data = await this.fetcher.fetch(
            `Companies${filter ? `?filter=${JSON.stringify(filter)}` : ''}`
        );
        const objs = data.map(d => new Company(d));

        return objs;
    }

    async getCompanyByJobId(jobId) {
        const data = await this.fetcher.fetch('jobs/' + jobId + '/company');
        const objs = new Company(data);
        return objs;
    }

    async getCompanyById(id) {
        const data = await this.fetcher.fetch('companies/' + id);
        const objs = new Company(data);
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
