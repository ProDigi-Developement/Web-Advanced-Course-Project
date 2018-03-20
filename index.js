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
            backend: ['C#', 'Java', '.Net'],
            frontend: ['HTML5', 'CSS3', 'Vue.js', 'Bootstrap', 'Javascript'],
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
            backend: ['Node', 'MongoDB', 'Express'],
            frontend: ['AngularJS', 'HTML', 'Sass', 'Bootstrap', 'CSS3', 'Javascript'],
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