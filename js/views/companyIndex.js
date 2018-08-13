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

        // initializes materialize collapsible passing a callback function to handle
        // the Company details fetch. "M" is set by materialize javascript (no jquery needed)
        const elems = document.querySelectorAll('.collapsible');
        this.collapsibleEl = M.Collapsible.init(elems, {
            onOpenStart: element => this.loadDetails(element),
            accordion: false
        });
    }

    loadData() {
        const filter = {
            fields: {
                id: true,
                name: true,
                size: true,
                logo: true
            }
        };

        this.companyController.all(filter).then(d => {
            const companies = d
                .map(c => {
                    return `
                    <li id="${c.props.id}" >
                        <div class="collapsible-header valign-wrapper">
                        <img src="${c.props.logo}" alt="" class="circle">
                            <p>${c.props.name}</p>
                            <span class="new badge" data-badge-caption="- size">
                                ${c.props.size} 
                            </span>
                        </div>
                        <div class="collapsible-body" >
                            <div class="preloader-wrapper big active">
                                <div class="spinner-layer spinner-blue-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </li>

                `;
                })
                .join('');

            this.companiesEl.innerHTML = companies;
        });
    }

    loadDetails(element) {
        const detailsEl = element.querySelector('.collapsible-body');
        this.companyController.getCompanyById(element.id).then(company => {
            detailsEl.innerHTML = `
          
                    <p><strong>Email:</strong> ${company.props.email}</p>
                    <p><strong>Contact:</strong> ${company.props.contact}</p>
                    <p><strong>Website:</strong> ${company.props.website}</p>
                    <p><strong>TechStack:</strong> 
                    ${company.props.techStack}</p>
                    <p>
                    <strong>Description:</strong> 
                    ${company.props.description}</p>
         
            
            `;
        });
    }
}
