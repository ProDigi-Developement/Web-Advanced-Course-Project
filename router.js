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
        component: ProfileComponent
    }
]

const router = new VueRouter({
    routes
})