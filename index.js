function Job(parameters) {
    this.title = parameters.title;
    this.startDate = parameters.startDate;
    this.description = parameters.description;
    this.stack = parameters.stack;
    this.numberApplied = parameters.numberApplied;
    this.salary = parameters.salary;
    this.postDate = parameters.postDate;
    this.applicantList = parameters.applicantList;
}


let jobs = [
    new Job({
        title: 'frontend developer 1',
        startDate: new Date(),
        description: 'Looking for a web developer who had 15 years of Vue.js',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 0,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    }),
    new Job({
        title: 'frontend developer 1',
        startDate: new Date(),
        description: 'Looking for a web developer who had 15 years of Vue.js',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 0,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    }),
    new Job({
        title: 'frontend developer 1',
        startDate: new Date(),
        description: 'Looking for a web developer who had 15 years of Vue.js',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 0,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    })
];

let JobListComponent = Vue.component('job-list', {
    template: `
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="job in jobs">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{job.title}}</h5>
            <small>{{job.postDate}}</small>
          </div>
          <p class="mb-1">{{job.description}}</p>
          <div class="d-flex justify-content-between">
            <small>Salary {{job.salary}}</small>
            <span class="badge badge-primary badge-pill">14</span>
          </div>
        </a>
      </div>
    `,
    data: function() {
        return {
            jobs: jobs
        };
    }
});

let jobComponent = Vue.component('lc-job', {
    // options
    props: ['joby'],

    template: `
  	<h3>jo</h3>
  `,
    data: function() {
        return {

        };
    }
})

let ApplicantListComponent = Vue.component('lc-applicant-list', {
    template: `
  <div>
    <h1>Applicant List</h1>
    <ul>
      <li v-for="app in applicants">
        {{app}}
      </li>
    </ul>
  </div>
`,
    data: function() {
        return {
            applicants: [
                "Jen",
                "Mayank",
                "Mayur",
                "Arsh",
                "Vishnu",
                "Kevin",
                "Denis"
            ],
        };
    },
    methods: {

    },
});

const routes = [
    { path: '/jobs', component: JobListComponent },
    { path: '/applicants', component: ApplicantListComponent }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    components: {
        'lc-job': jobComponent,
        'lc-applicant-list': ApplicantListComponent,
    },
    data: {
        message: 'Hello Vue.js!',
        currentPage: 'job-list',
        currentJob: null,
        jobList: jobs,
    },
    methods: {
        setPage: function(page) {
            console.log(page);

            this.currentPage = page;
        },
        selectJob: function(job) {
            this.currentJob = job;
            this.setPage('job-details');
        }
    },
    router
}).$mount('#app');