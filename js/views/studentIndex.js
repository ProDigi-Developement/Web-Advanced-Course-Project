window.onload = () => {
    const stView = new StudentView();

    /* to be fixed
    document.getElementById('nameSearch').addEventListener('keyup', function (e) {
        if (e.keyCode === 27) {
            e.currentTarget.val('');
            documentTable.search('');
        }
    });
    */ 
};

class StudentView {
    constructor() {
        this.studentController = new StudentController();
        this.studentController.setToken('uvcvtx8Z9k2TG53kpB7Dk2kWrJi5xmmxCUyMxZjZ3vhoPlFRWOtVLFqORoACMgzf');
        this.studentsArr = [];

        // Listjs.com properties
        //this.listJsDOMTable = null;
        //this.listJsOptions = { valueNames: [ 'name', 'email', 'term' ] };

        this.loadAllData();
    }

    loadAllData() {
        this.studentController.all()
            .then( data => {
                this.studentsArr = data; 
                this.loadHtmlRadioTerm(); 
                this.loadHtmlTable( this.studentsArr );
                // required by ListJS.com
                // this.listJsDOMTable = new List( 'students-sort-table', this.listJsOptions );
            })
            .catch( (err) => {
                // TODO: handle the error gracefully !!!
                console.log( err.message );
            });
    }

    loadFilterData() {
        const term = document.querySelector('input[name=term-option-filter]:checked').value;

        const props = {'term': term, 'name': ''}; 

        // clear tbody except the first row, due to Google MDL
        const tableRef = document.getElementById( 'students-table' );
        while (tableRef.rows.length > 1) {
            tableRef.deleteRow(1);
        }

        this.studentController.filterStudents(props)
            .then( data => {
                this.studentsArr = data; 
                this.loadHtmlTable( this.studentsArr );
            })
            .catch( (err) => {
                // TODO: handle the error gracefully !!!
                console.log( err.message );
            });
    }

    /* --- OLD version based on comboBox Term
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
    */

    loadHtmlRadioTerm() {
        // Populating Term radioButton span
        let newSpan = document.createElement('span');
        newSpan.innerHTML = 
            '<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-0">'+
            '<input type="radio" id="option-0" class="mdl-radio__button" value="0" name="term-option-filter" checked>'+
            '<span class="mdl-radio__label">All terms</span>&nbsp;</label>';
        componentHandler.upgradeElements(newSpan);
        document.getElementById( 'spamFilter' ).appendChild(newSpan);

        // Creating a sorted array with unique 'term' & mapping into the radioButton element
        [...new Set( this.studentsArr.map( st => st.props.term ).sort() ) ]
            .map( term => {
                newSpan = document.createElement('span');
                newSpan.innerHTML = 
                    `<label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-${term}">`+
                    `<input type="radio" id="option-${term}" class="mdl-radio__button" value="${term}" name="term-option-filter">`+
                    `<span class="mdl-radio__label">Term ${term}</span>&nbsp;</label>`;
                componentHandler.upgradeElements(newSpan);
                document.getElementById( 'spamFilter' ).appendChild(newSpan);
                return;
            });

        // Adding event handler for newly radioButtons added
        document.getElementsByName('term-option-filter')
            .forEach( el => {
                el.addEventListener('click', (evt) => {
                    // this.loadFilterData(evt.target.value);   // TODO: in case call w/ selected value
                    this.loadFilterData();
                });    
            });
    } 

    loadHtmlTable ( studentsArr ) {
        const tableRef = document.getElementById( 'students-table' );
        let rowCounter = 0;

        studentsArr.forEach( st => {
            this.loadRowTable( tableRef.insertRow(), rowCounter++ , st.props );
        });

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
        celResume.innerHTML = `<a href="#">resume</a>`;
        celResume.className = 'mdl-data-table__cell--non-numeric';
        // --- Linkedin
        const celLinkedin = row.insertCell();
        celLinkedin.innerHTML = `<a href="#">LinkedIn</a>`;
        celLinkedin.className = 'mdl-data-table__cell--non-numeric';
        // --- Github
        const celGithub = row.insertCell();
        celGithub.innerHTML = `<a href="#">Github</a>`;
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