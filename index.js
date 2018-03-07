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
  	title : 'frontend developer 1',
    startDate : new Date(),
    description : 'Looking for a web developer who had 15 years of Vue.js',
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
  	title : 'frontend developer 1',
    startDate : new Date(),
    description : 'Looking for a web developer who had 15 years of Vue.js',
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
  	title : 'frontend developer 1',
    startDate : new Date(),
    description : 'Looking for a web developer who had 15 years of Vue.js',
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
  },
  data: {
    message: 'Hello Vue.js!',
    currentPage: 'job-list',
    currentJob: null,
    jobList:jobs,
  },
  methods: {
  	setPage: function(page) {
    	this.currentPage = page;
    },
    selectJob: function(job) {
    	this.currentJob = job;
      this.setPage('job-details');
    }
  },

})
