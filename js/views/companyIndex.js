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
                        <td>Details</td>
                    </tr>

                `;
                })
                .join('');

            this.companiesEl.innerHTML = companies;
        });
    }
}
