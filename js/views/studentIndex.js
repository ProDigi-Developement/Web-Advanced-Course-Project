window.onload = () => {
    const stView = new StudentView();
    document.getElementById( 'cmbTermFilter' )
        .addEventListener( 'change', () => { stView.applyFilter() });
};

class StudentView {
    constructor() {
        this.studentController = new StudentController();
        this.studentController.setToken('uvcvtx8Z9k2TG53kpB7Dk2kWrJi5xmmxCUyMxZjZ3vhoPlFRWOtVLFqORoACMgzf');
        this.studentsArr = [];
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

    loadHtmlFilterCmb() {
        // Populating Term combo
        const cmbTermEl = document.getElementById( 'cmbTermFilter' );
        cmbTermEl.options[ cmbTermEl.options.length ] = new Option( 'All' );

        // Creating new array with unique 'term' & mapping to the combo
        [...new Set( this.studentsArr.map( st => st.props.term ) ) ]
            .map( term => {
                return cmbTermEl.options[ cmbTermEl.options.length ] = new Option( term );
            });
    } 

    static uniqBy(a, key) {
        var seen = {};
        return a.filter( function(item) {
            var k = key( item );
            return seen.hasOwnProperty(k) ? false : ( seen[k] = true );
        })
    }

    loadHtmlTable ( studentsArr ) {
        const tableBody = studentsArr.map( st => { 
                return `<tr> 
                    <td><img src="${st.props.photo}"></img></td> 
                    <td>${st.props.name}</td> 
                    <td>${st.props.email}</td> 
                    <td>${st.props.term}</td> 
                    <td>${st.props.goal}</td> 
                    <td>${st.props.githubLink}</td> 
                </tr>`;
            })
            .join('');
        document.querySelector( '#students-data' ).innerHTML = 
            `<thead>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Term</th>
                <th>Goal</th>
                <th>Github link</th>
            </thead>
            <tbody> ${tableBody} </tbody>`;
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

}