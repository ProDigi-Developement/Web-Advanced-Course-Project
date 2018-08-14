window.onload = () => {
    new StudentView();
};

class StudentView {
    constructor() {
        this.studentController = new StudentController();
        this.loadData();
    }

    loadData() {
        this.studentController.all()
            .then( data => { 
                this.loadDOM( data ) 
            });
    }

    loadDOM ( studentsArr ) {
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
}