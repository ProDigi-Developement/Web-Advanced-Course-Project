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
        props: true,
        children: [{
            path: 'applicants',
            component: ApplicantListComponent
        }]
    },
    {
        path: '/company',
        component: ProfileComponent
    },
    {
        path: '/student',
        component: StudentProfileComponent
    }
]

const router = new VueRouter({
    routes
})