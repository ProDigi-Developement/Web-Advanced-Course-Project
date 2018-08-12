window.onload = () => {
    new JobView();
   
    
};

class JobView {
    constructor() {
        this.jobController = new JobController();
        this.loadDOM();
        this.loadData();
    }

    loadDOM() {
        this.jobsEl = document.querySelector("#job-data");
        
        

        
    }

    loadData() {
    // this.companyController.all().then(d => {
    //     console.log(d);
    // });
    // return;
    this.jobController.all().then(data => {
        const jobs = data
            .map(j => {
                return `
                <tr>
                    <td>${j.props.title}</td>
                    <td>${j.props.salary}</td>
                    
                </tr>

            `;
            console.log(j.props.title);
            })
            .join('');

        this.jobsEl.innerHTML = jobs;
        
        });
    }

    
}