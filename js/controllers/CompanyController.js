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

    setToken(token) {
        this.token = token;
    }

    /**
   * List all companies
   * @returns {Array} Company
   */
    async all(filter = '') {
        try {
            const data = await this.fetcher.fetch(
                `Companies?access_token=${this.token}${
                    filter ? `&filter=${JSON.stringify(filter)}` : ''
                }`
            );
            const objs = data.map(d => new Company(d));
            return objs;
        } catch (error) {
            throw new Error(error);
        }
    }

    //👷 TODO : Refactor to receive token as part of the URL
    async getCompanyByJobId(jobId) {
        const data = await this.fetcher.fetch('jobs/' + jobId + '/company');
        const objs = new Company(data);
        return objs;
    }

    async getCompanyById(id) {
        const data = await this.fetcher.fetch(
            'companies/' + id + `?access_token=${this.token}`
        );
        const objs = new Company(data);
        return objs;
    }

    //👷 TODO : Refactor to receive token as part of the URL
    async create(company) {
        delete company.props.id;
        const data = company.props;
        const r = await this.fetcher.post('companies', data);
        return r;
    }
}
