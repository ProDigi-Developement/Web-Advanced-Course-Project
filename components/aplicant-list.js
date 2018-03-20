let ApplicantListComponent = Vue.component('lc-applicant-list', {
    template: `
    <div>
    	<h4>Applicant List</h4>
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