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
        'lc-job-details': JobDetailsComponent,
        'lc-applicant-list': ApplicantListComponent,
        'lc-company-profile': ProfileComponent,
        'lc-student-profile': StudentProfileComponent,
        'lc-job-list': JobListComponent,
        'lc-new-job': NewJobComponent

    },
    data: {
        message: 'Hello Vue.js!',
        currentPage: 'job-list',
        currentJob: null,
        jobList: jobs,
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
    router

})