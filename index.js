function Job(parameters) {
    this.id = parameters.id;
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
        id: 1,
        title: 'Software Developer',
        startDate: new Date(),
        description: '2-5 years’ experience in developing healthcare software applications in C#, Java, .Net, C++, HTML5',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 10,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    }),
    new Job({
        id: 2,
        title: 'Full Stack Developer',
        startDate: new Date(),
        description: 'Experience using, or familiarity with the MEAN Stack: MongoDB, Express, AngularJS and Node.JS',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 5,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    }),
    new Job({
        id: 3,
        title: 'Front End Developer',
        startDate: new Date(),
        description: 'Prior hands-on experience with JavaScript and JavaScript frameworks, such as VueJS and React;',
        stack: {
            backend: ['Node', 'Express', 'SQL'],
            frontend: ['Vue', 'HTML', 'Sass', 'Bootstrap', 'Javascript'],
        },
        numberApplied: 15,
        salary: 200000,
        postDate: new Date(),
        applicantList: [],
    })
];

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
        return {
            jobs: jobs
        };
    },
    methods: {
        showJobDetail: function(job) {
            router.push({ path: `/jobs/${job.id}` })
        },
        createNewJob: function() {
            router.push({ path: `/jobs/new` })
        }
    },
});

let CompanyProfileComponent = Vue.component('lc-company-profile', {
    template: `
    <div>
      <h2>Company Profile</h2>
      <p>In construction</p>
    </div>
  `,
  data: function () {
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

let JobDetailsComponent = Vue.component('lc-job', {

// company profile component
let ProfileComponent = Vue.component('lc-company-profile', {
  template: `
    <div>

    <form>
    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Company Name</label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="companyName" placeholder="Company Name">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Address</label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="Address" placeholder="XX Street XX City">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label> Email</label>
        </div>

        <div class="col-sm-10">
          <input type="email" class="form-control" id="email" placeholder="example@XXX.com">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label> Phone number</label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="phoneNumber" placeholder="###-###-####">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Contact person </label>
        </div>

        <div class="col-sm-10">
          <input type="text" class="form-control" id="contactPerson" placeholder="The person to contact">
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-sm-2">
          <label>Description</label>
        </div>

        <div class="col-sm-10">
          <textarea class="form-control" id="description" placeholder="About this company" rows="3"></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-warning">SAVE</button>
  </form>
    </div>
  `,
  data: function () {

  },
  methods: {

  },
});


let jobComponent = Vue.component('lc-job', {
  // options
  props: ['joby'],

  template: `
  	<h3>jo</h3>
  `,
  data: function () {
    return {

    };
  }
})

let JobDetailsComponent = Vue.component('lc-job-details-route', {


  template: `<h3></h3>`,
  data: function () {
    return {


    };
  }
})

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

template: `
<div>
  <h2>{{job.title}}</h2>
  <p>{{job.description}}</p>
  <router-link :to="applicants" class="nav-link">Application List</router-link>
  <router-view></router-view>
</div>
`,
data: function() {
    return {
        job: jobs[this.$route.params.id - 1],
        applicants: `/jobs/${this.$route.params.id - 1}/applicants`
    };
}
})

let NewJobComponent = Vue.component('lc-new-job', {
template: `
<div>
<h2>New Job</h2>
<p>In construction</p>
</div>
`,
data: function() {
    return {};
}
});

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

new Vue({
  el: '#app',
  components: {
    'lc-job': jobComponent,
    'lc-applicant-list': ApplicantListComponent,
    'lc-job-details-route': JobDetailsComponent,
    'lc-company-profile:': ProfileComponent,
  },
  data: {
    message: 'Hello Vue.js!',
    currentPage: 'job-list',
    currentJob: null,
    jobList: jobs,
  },
  methods: {
    setPage: function (page) {
      this.currentPage = page;
    },
    selectJob: function (job) {
      this.currentJob = job;
      this.setPage('job-details');
    },
});

const routes = [{
        path: '/',
        component: JobListComponent
    },
    {
        path: '/jobs',
        component: JobListComponent
    },
    {
        path: '/jobs/new',
        component: NewJobComponent
    },
    {
        path: '/jobs/:id',
        component: JobDetailsComponent,
        children: [{
            path: 'applicants',
            component: ApplicantListComponent
        }]
    },
    {
        path: '/company',
        component: CompanyProfileComponent
    }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    components: {
        'lc-job': JobDetailsComponent,
        'lc-applicant-list': ApplicantListComponent,
        'lc-company-profile': CompanyProfileComponent,
        'lc-job-list': JobListComponent
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
