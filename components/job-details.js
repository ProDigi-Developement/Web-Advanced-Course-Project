let JobDetailsComponent = Vue.component('lc-job-details', {

    props: {
        id: {
            type: String,
            default: 1
        }
    },

    template: `
    <div class="container">
        <div class="jobdetails row">
            <div class="col">
                <h4> {{currentJob.title}}</h4>
                <p>{{currentJob.description}}</p>
                <span>Startdate:{{currentJob.startDate}}</span>
                <span><h5>Stacks</h5></span>
                <div class="row">
                    <div class="col well">
                        <ul>
                            <li class="job" v-for='backend in currentJob.stack.backend'>
                                {{backend}}</li>
                        </ul>
                    </div>
                    <div class="col">
                        <ul>
                            <li class="job" v-for='frontend in currentJob.stack.frontend'>
                                {{frontend}}</li>
                        </ul>
                    </div>
                </div>
                <span class="item row">Number of people applied:{{currentJob.numberApplied}}</span>
                <span class="item row">Salary:{{currentJob.salary}}</span>
                <span class="item row">PostDate:{{currentJob.postDate}}</span>
                <router-link :to="applicants" class="nav-link">Application List</router-link>
                <router-view></router-view>
            </div>
        </div> 
        </div> 
    `,
    data: function () {
        return {
            currentJob: jobs[this.id - 1],
            applicants: `/jobs/${this.id}/applicants`
        };
    }
});