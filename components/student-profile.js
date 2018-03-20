let StudentProfileComponent = Vue.component('lc-student-profile', {
    template: `
    <div>
        <h1>Student Profile</h1>
        <h2>{student.name}</h2>
    </div>
  `,
    data: function() {
        return {
            student: {
                name: 'Denis Gois'
            },
        };
    },
    methods: {

    },
});