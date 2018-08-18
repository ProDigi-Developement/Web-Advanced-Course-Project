window.onload = () => {
    const stView = new StudentView();

    var options = { valueNames: ['material', 'quantity', 'price'] }
        , documentTable = new List('mdl-table-new', options)
    ;
    document.getElementById( 'cmbTermFilter' )
        .addEventListener( 'change', () => { stView.applyFilter(); });
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

        // clear tbody except the first row, due to Google MDL
        const tableRef = document.getElementById( 'students-table' );
        while (tableRef.rows.length > 1) {
            tableRef.deleteRow(1);
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
        const tableRef = document.getElementById( 'students-table' );
        let rowCounter = 0;

        studentsArr.forEach( st => {
            this.loadRowTable( tableRef.insertRow(), rowCounter++ , st.props );
        });

        // required by ListJS.com
        this.listJsDOMTable = new List( 'students-table', this.listJsOptions );
    }

    loadRowTable( row, rowid, stProps ) {
        // --- Checkbox
        row.insertCell().innerHTML =
            `<label class="mdl-checkbox  mdl-js-checkbox  mdl-js-ripple-effect  mdl-data-table__select" `  +
            `for="row[${rowid}]"> <input type="checkbox" id="row[${rowid}]" class="mdl-checkbox__input" />` + 
            `</label>`;

        // --- Photo
        const celPhoto = row.insertCell();
        celPhoto.innerHTML = `<img  src="${stProps.photo}" ></img>`;
        celPhoto.className = 'mdl-data-table__cell--non-numeric';
        // --- Name
        const celName = row.insertCell();
        celName.innerHTML = stProps.name;
        celName.className = 'mdl-data-table__cell--non-numeric  name';
        // --- Email
        const celEmail = row.insertCell();
        celEmail.innerHTML = stProps.email;
        celEmail.className = 'mdl-data-table__cell--non-numeric  email';
        // --- Term
        const celTerm = row.insertCell();
        celTerm.innerHTML = stProps.term;
        celTerm.className = 'mdl-data-table__cell--non-numeric  term';
        // --- Resume
        const celResume = row.insertCell();
        celResume.innerHTML = `<a href="${stProps.resume}">resume</a>`;
        celResume.className = 'mdl-data-table__cell--non-numeric';
        // --- Linkedin
        const celLinkedin = row.insertCell();
        celLinkedin.innerHTML = `<a href="${stProps.linkedInLink}">LinkedIn</a>`;
        celLinkedin.className = 'mdl-data-table__cell--non-numeric';
        // --- Github
        const celGithub = row.insertCell();
        celGithub.innerHTML = `<a href="${stProps.githubLink}">Github</a>`;
        celGithub.className = 'mdl-data-table__cell--non-numeric';

        componentHandler.upgradeElements(row);
    }

    static uniqBy(a, key) {
        var seen = {};
        return a.filter( function(item) {
            var k = key( item );
            return seen.hasOwnProperty(k) ? false : ( seen[k] = true );
        })
    }

}