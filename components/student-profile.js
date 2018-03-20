let StudentProfileComponent = Vue.component('lc-student-profile', {
    template: `
    <div>
        <h1>Student Profile</h1>
        <h2>{{student.name}}</h2>
        <p>In construction</p>
    </div>
  `,
    data: function() {
        return {
            student: {
                name: 'John Due'
            },
        };
    },
    methods: {

    },
});