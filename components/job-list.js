let JobListComponent = Vue.component('lc-job-list', {
    template: `
      <div>
        <div class="list-group">
          <a class="list-group-item list-group-item-action flex-column align-items-start" v-for="job in jobs" v-on:click="showJobDetail(job)" >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{job.title}}</h5>
              <small>{{job.postDate}}</small>
            </div>
            <p class="mb-1">{{job.description}}</p>
            <div class="d-flex justify-content-between">
              <small>Salary {{job.salary}}</small>
              <span class="badge badge-primary badge-pill">{{job.numberApplied}}</span>
            </div>
          </a>
        </div>
        <button type="button" class="btn btn-primary float-right" v-on:click="createNewJob()">New Job</button>
      </div>
    `,
    data: function() {
        console.log(jobs);
        return {
            jobs: jobs
        };
    },
    methods: {
        showJobDetail: function(job) {
            console.log(job);

            router.push({ path: `/jobs/${job.id}` })
        },
        createNewJob: function() {
            router.push({ path: `/jobs/new` })
        }
    },
});