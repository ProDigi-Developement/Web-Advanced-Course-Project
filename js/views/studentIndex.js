window.onload = () => {
    const stView = new StudentView();

    var options = { valueNames: ['material', 'quantity', 'price'] }
        , documentTable = new List('mdl-table-new', options)
    ;
    document.getElementById( 'cmbTermFilter' )
        .addEventListener( 'change', () => { stView.applyFilter() });
    
    // document.getElementById( 'cmbTermFilter' )
    //     .addEventListener( 'change', () => { stView.applyFilter() });
};

class StudentView {
    constructor() {
        this.studentController = new StudentController();
        this.studentController.setToken('uvcvtx8Z9k2TG53kpB7Dk2kWrJi5xmmxCUyMxZjZ3vhoPlFRWOtVLFqORoACMgzf');
        this.studentsArr = [];

        // Listjs.com properties
        this.listJsDOMTable = null;
        this.listJsOptions = { valueNames: [ 'name', 'email', 'term' ] };

        this.loadData();
    }

    loadData() {
        this.studentController.all()
            .then( data => {
                this.studentsArr = data; 
                this.loadHtmlFilterCmb(); 
                this.loadHtmlTable( this.studentsArr );
            })
            .catch( (err) => {
                // TODO: handle the error gracefully !!!
                console.log( err.message );
            });
    }

    applyFilter () {
        const cmbTermEl = document.getElementById( 'cmbTermFilter' );
        let filteredArr = this.studentsArr;

        if ( cmbTermEl.selectedIndex > 0 )
        {
            filteredArr = filteredArr.filter( st => {
                return st.props.term == cmbTermEl[ cmbTermEl.selectedIndex ].text;
            });
        }

        this.loadHtmlTable ( filteredArr );
    }

    loadHtmlFilterCmb() {
        // Populating Term combo
        const cmbTermEl = document.getElementById( 'cmbTermFilter' );
        cmbTermEl.options[ cmbTermEl.options.length ] = new Option( 'All' );

        // Creating a sorted array with unique 'term' & mapping into the combo element
        [...new Set( this.studentsArr.map( st => st.props.term ).sort() ) ]
            .map( term => {
                return cmbTermEl.options[ cmbTermEl.options.length ] = new Option( term );
            });
    } 

    loadHtmlTable ( studentsArr ) {
        const tableBody = studentsArr.map( st => {
            // td class "name, email, term" --> required by ListJS.com 
            return `<tr> 
                    <td  class = "mdl-data-table__cell--non-numeric" ><img  src="${st.props.photo}" ></img></td> 
                    <td  class="name  mdl-data-table__cell--non-numeric" >${st.props.name}</td> 
                    <td  class="email  mdl-data-table__cell--non-numeric" >${st.props.email}</td> 
                    <td  class="term  mdl-data-table__cell--non-numeric" >${st.props.term}</td> 
                    <td  class = "mdl-data-table__cell--non-numeric" >${st.props.resume}</td> 
                    <td  class = "mdl-data-table__cell--non-numeric" >${st.props.linkedInLink}</td> 
                    <td  class = "mdl-data-table__cell--non-numeric" >${st.props.githubLink}</td> 
                </tr>`;
            }).join('');
        // th data-sort and class "sort, name, email, term" --> required by ListJS.com 
        // tbody class="list" --> required by ListJS.com
        document.querySelector( '#students-table' ).innerHTML = 
            `<thead><tr>
                <th  class = "mdl-data-table__cell--non-numeric" >Photo</th>
                <th  data-sort = "name"  class = "sort  name  mdl-data-table__cell--non-numeric" >Name</th>
                <th  data-sort = "email"  class = "sort  email  mdl-data-table__cell--non-numeric" >Email</th>
                <th  data-sort = "term"  class = "sort  term  mdl-data-table__cell--non-numeric" >Term</th>
                <th  class = "mdl-data-table__cell--non-numeric" >Resume</th>
                <th  class = "mdl-data-table__cell--non-numeric" >LinkedIn</th>
                <th  class = "mdl-data-table__cell--non-numeric" >Github</th>
            </tr></thead>
            <tbody  class = "list" > ${tableBody} </tbody>`;
        // required by ListJS.com
        this.listJsDOMTable = new List( 'students-table', this.listJsOptions );
        // make table Google MDL selectable
        // add class mdl-data-table--selectable   
    }

    static uniqBy(a, key) {
        var seen = {};
        return a.filter( function(item) {
            var k = key( item );
            return seen.hasOwnProperty(k) ? false : ( seen[k] = true );
        })
    }

}