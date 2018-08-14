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
        this.jobsEl.addEventListener('click', e=>{
            console.log(e.target.id);
        });
        
        

        
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
                    <td><span id=${j.props.id} class="new badge" data-badge-caption="Details">
                    
                    </span> </td>
                   
                    
                </tr>
                <tr>
                    <div id ="job-details-${j.props.id}">
                    
                    </div>
                </tr>
                
                

            `;
            console.log(j.props.title);
            })
            .join('');

        this.jobsEl.innerHTML = jobs;
        
        });
    }

    
}