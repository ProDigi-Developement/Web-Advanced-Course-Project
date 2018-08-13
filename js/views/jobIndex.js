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
        this.jobsEl = document.querySelector('#jobs-data');
    }

    loadData() {
    // this.jobController.all().then(d => {
        // console.log(d);
    // });
    // return;
        this.jobController.all().then(d => {
            const jobs = d.map(c => {return `
                    <tr>
                        <td>${c.props.title}</td>
                        <td>${c.props.salary}</td>
                        <td>Details</td>
                    </tr>`;
                })
                .join('');
            this.jobsEl.innerHTML = jobs;
        });
    }
}
