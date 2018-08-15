window.onload = () => {
    new StudentsList();
};

class StudentsList {
    constructor() {
        this.studentController = new StudentController();
        this.companyController = new CompanyController();
        this.auth = new AuthenticationController();

        this.studentController.setToken(this.auth.getToken());
        this.companyController.setToken(this.auth.getToken());

        this.loadDOM();
        this.loadData();
    }

    loadDOM() {
        this.studentsEl = document.querySelector('#students-data');

        // initializes materialize collapsible passing a callback function to handle
        // the Company details fetch. "M" is set by materialize javascript (no jquery needed)
        const elems = document.querySelectorAll('.collapsible');
    }

    loadData() {
        if (!this.studentController.token) {
            this.studentsEl.innerHTML = 'Login is needed';
        }

        const filter = {
            fields: {
                id: true,
                name: true,
                photo: true
            }
        };

        this.studentController
            .all(filter)
            .then(d => {
                const students = d
                    .map(c => {
                        return `
                    <li id="${c.props.id}" >
                        <div class="collapsible-header valign-wrapper">
                        <img src="${c.props.photo}" alt="" class="circle">
                            <p>${c.props.name}</p>
                            <span class="new badge" data-badge-caption="- size">
                                ${c.props.id} 
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

                this.studentsEl.innerHTML = students;
            })
            .catch(error => {
                this.studentsEl.innerHTML = error;
            });
    }
}
