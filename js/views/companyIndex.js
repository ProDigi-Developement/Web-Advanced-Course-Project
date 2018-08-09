window.onload = () => {
    new CompanyView();
};

class CompanyView {
    constructor() {
        this.companyController = new CompanyController();
        this.loadDOM();
        this.loadData();
    }

    loadDOM() {
        this.companiesEl = document.querySelector('#companies-data');
        this.companyDetailsEl = document.querySelector('#company-details');

        this.companiesEl.addEventListener('click', e => {
            if (e.target.id) {
                this.loadDetails(e.target.id);
            }
        });
    }

    loadData() {
    // this.companyController.all().then(d => {
    //     console.log(d);
    // });
    // return;
        this.companyController.all().then(d => {
            const companies = d
                .map(c => {
                    return `
                    <tr>
                        <td>${c.props.name}</td>
                        <td>${c.props.size}</td>
                        <td id="${c.props.id}">Details</td>
                    </tr>

                `;
                })
                .join('');

            this.companiesEl.innerHTML = companies;
        });
    }

    loadDetails(id) {
        this.companyController.getCompanyById(id).then(company => {
            this.companyDetailsEl.innerHTML = `
                <li>Name:${company.props.name}</li>
                <li>Email:${company.props.email}</li>
                <li>Logo:${company.props.logo}</li>
                <li>Size:${company.props.size}</li>
                <li>Contact:${company.props.contact}</li>
                <li>Website:${company.props.website}</li>
                <li>TechStack:${company.props.techStack}</li>
                <li>Description:${company.props.description}</li>
            
            `;
        });
    }
}
