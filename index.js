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
    }
  },

})
