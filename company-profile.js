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